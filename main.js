import './style.css'
import { core } from './core.js'

function saveData(key, value) {
  localStorage.setItem('data-' + key, value);
}
function loadData(key) {
  return localStorage.getItem('data-' + key) || '';
}
const station = ['', '南港', '台北', '板橋', '桃園', '新竹', '苗栗', '台中', '彰化', '雲林', '嘉義', '台南', '左營'];
const allFields = ['selectStartStation', 'selectDestinationStation', 'toTimeInputField', 'toTrainIDInputField', 'idNumber', 'mobilePhone', 'email'];
function loadAllData() {
  for (const field of allFields) {
    const value = loadData(field);
    document.getElementById(field).value = value;
  }
}
loadAllData();
function generateBookmarklet() {
  const coreJs = core.toString();
  let values = [];
  for (const field of allFields) {
    if (field == 'toTimeInputField') {
      values.push(document.getElementById(field).value.replaceAll('-', '/'));
    } else {
      values.push(document.getElementById(field).value);
    }
  }
  const valueStr = JSON.stringify(values);
  let url = `javascript:(function(){const arg=${valueStr}; ${coreJs} core(...arg); })();`;
  document.getElementById('bookmarklet').href = url;
  document.getElementById('bookmarklet').innerText = `${values[2].substring(5)}-${values[3]}-${station[values[0]] || ''}-${station[values[1]] || ''}`;
}
generateBookmarklet();

for (const field of allFields) {
  document.getElementById(field).addEventListener('input', function(event) {
    saveData(field, event.target.value);
    generateBookmarklet();
  })
}
