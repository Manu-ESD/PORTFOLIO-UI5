sap.ui.define(
[
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
],
function(Controller, MessageToast) {
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
		}
	});
});