document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".threeStatesInput").forEach(function (threeStatesInput) {
        threeStatesInput.value = 0
        threeStatesInput.onclick = function (e) {
            switch (Number(this.value)) {
                case 1:
                    this.value = 2;
                    this.indeterminate = false;
                    this.checked = true;
                    break;
                case 2:
                    this.value = 0;
                    this.indeterminate = false;
                    this.checked = false;
                    break;
                default:
                    this.value = 1;
                    this.indeterminate = true;
                    this.checked = false;
                    break;
            }
        }
    })
})