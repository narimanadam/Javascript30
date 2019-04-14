(function (document) {
    const $checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
    let lastChecked;

    _handleCheck = ({ shiftKey, currentTarget }) => {
        let inBetween = false;
        // If user pressed shift key and clicked the checkbox
        if (shiftKey && currentTarget.checked) {
            // loop over every checkbox
            $checkboxes.forEach(checkbox => {
                // check if the current checkbox in loop is same as the current target or last checked
                if (checkbox === currentTarget || checkbox === lastChecked) {
                    // set inBetween to be true
                    inBetween = !inBetween;
                }
                // while inBetween is true every checkbox is looped should be checked
                if (inBetween) {
                    checkbox.checked = true;
                }
            });
        }
        // is set on click
        lastChecked = currentTarget;
    }

    $checkboxes.forEach(checkbox => checkbox.addEventListener('click', _handleCheck))
})(document);