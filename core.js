export function core(selectStartStation, selectDestinationStation, toTimeInputField, toTrainIDInputField, idNumber, mobilePhone, email) {
	if (document.getElementsByName('selectStartStation').length) {
		document.getElementsByName('bookingMethod')[1].click();

		document.getElementsByName('selectStartStation')[0].value = selectStartStation;
		document.getElementsByName('selectDestinationStation')[0].value = selectDestinationStation;
		document.getElementsByName('toTimeInputField')[0].value = toTimeInputField;
		document.getElementsByName('toTrainIDInputField')[0].value = toTrainIDInputField;
		document.getElementsByName('ticketPanel:rows:0:ticketAmount')[0].value = '1F';
	} else if (document.getElementById('mobilePhone') !== null) {
		document.getElementById('idNumber').value = idNumber;
		document.getElementById('mobilePhone').value = mobilePhone;
		document.getElementById('email').value = email;
		const passenger = document.getElementById('BookingS3Form_TicketPassengerInfoInputPanel_passengerDataView_0_passengerDataView2_passengerDataIdNumber');
		if (passenger !== null) {
			passenger.value = idNumber;
		}
		document.getElementById('memberSystemRadio1').click();
		const memberShipCheckBox = document.getElementById('memberShipCheckBox');
		if (!memberShipCheckBox.checked) {
			memberShipCheckBox.click();
		}
		const agree = document.getElementsByName('agree')[0];
		if (!agree.checked) {
			agree.click();
		}
	}
}
