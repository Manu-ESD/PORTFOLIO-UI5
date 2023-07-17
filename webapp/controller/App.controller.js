sap.ui.define(
[
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/core/library",
	"sap/m/Dialog",
	"sap/m/Button",
	"sap/m/library",
	"sap/m/Text"
],
function(Controller, MessageToast,  coreLibrary, Dialog, Button, mobileLibrary, Text) {
			// shortcut for sap.m.ButtonType
	var ButtonType = mobileLibrary.ButtonType;

	// shortcut for sap.m.DialogType
	var DialogType = mobileLibrary.DialogType;




	return Controller.extend("mark.one.controller.App", {
			ondownload: function() {
				MessageToast.show("Downloading Guggilla Venkata Manohar Resume...");

				var link = document.createElement('a');
				link.href = "https://drive.google.com/file/d/1U780WdqgOnEMWsQYNYVg4nR__4xWqBO1/view";
				link.download = 'file.txt';
				document.body.appendChild(link);
				link.click();
				document.body.removeChild(link);
		},
		
		onhome: function() {
			MessageToast.show("Home Page");
			location.reload();
			// var link = document.createElement('a');
			// 	link.href = "./";
			// 	document.body.appendChild(link);
			// 	link.click();
			// 	document.body.removeChild(link);
			// }
		},
		

		
		onDefaultMessageDialogPress: function () {
			if (!this.oDefaultMessageDialog) {
				this.oDefaultMessageDialog = new Dialog({
					type: DialogType.Message,
					title: "Thank you",
					content: new Text({ text: "Please contact me directly, phone number: 7780633848,7780632321" }),
					beginButton: new Button({
						type: ButtonType.Emphasized,
						text: "OK",
						press: function () {
							this.oDefaultMessageDialog.close();
						}.bind(this)
					})
				});
			}

			this.oDefaultMessageDialog.open();
		}
	});
});