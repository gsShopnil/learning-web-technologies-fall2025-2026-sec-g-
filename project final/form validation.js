document.getElementById('submissionForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    clearErrors();

    if (validateForm()) {
        
        console.log("Validation successful! Form is ready to submit to server.");
        alert("Submission successful! (Simulated - check console for details)");

    } else {
        console.log("Validation failed. Please correct the errors.");
    }
});




function validateForm() {
    let isValid = true;

    const primaryPhotoInput = document.getElementById('primaryPhoto');
    const primaryPhotoError = document.getElementById('primaryPhotoError');
    const primaryPhotoFile = primaryPhotoInput.files[0];

    if (!primaryPhotoFile) {
        displayError(primaryPhotoError, "Please upload a primary photo.");
        isValid = false;
    } else {
        const fileType = primaryPhotoFile.name.split('.').pop().toLowerCase();
        


        if (!['jpg', 'jpeg', 'png'].includes(fileType)) {
            displayError(primaryPhotoError, "Invalid file type. Only JPG, JPEG, or PNG files are allowed.");
            isValid = false;
        }
    }

    

    const category = document.getElementById('category');
    const categoryError = document.getElementById('categoryError');
    if (category.value === "") {
        displayError(categoryError, "Please select a valid category.");
        isValid = false;
    }

    const exhibitionType = document.getElementById('exhibitionType');
    const exhibitionTypeError = document.getElementById('exhibitionTypeError');
    if (exhibitionType.value === "") {
        displayError(exhibitionTypeError, "Please select an exhibition type.");
        isValid = false;
    }

    const storyPhotosInput = document.getElementById('storyPhotos');
    const storyPhotosError = document.getElementById('storyPhotosError');
    const storyPhotoFiles = storyPhotosInput.files;

    if (storyPhotoFiles.length > 0) {
        
        if (storyPhotoFiles.length < 3 || storyPhotoFiles.length > 10) {
            displayError(storyPhotosError, `You uploaded ${storyPhotoFiles.length} images. Please upload between 3 and 10 images for the photo story.`);
            isValid = false;
        }

        
        for (let i = 0; i < storyPhotoFiles.length; i++) {
            const file = storyPhotoFiles[i];
            const fileType = file.name.split('.').pop().toLowerCase();
            if (!['jpg', 'jpeg', 'png'].includes(fileType)) {
                 displayError(storyPhotosError, "All photo story images must be JPG, JPEG, or PNG.");
                 isValid = false;
                 break; 
            }
        }
    }

    return isValid;
}


function displayError(element, message) {
    element.textContent = message;
    element.parentElement.querySelector('input, select, textarea').classList.add('input-error');
}

function clearErrors() {
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
    document.querySelectorAll('.input-error').forEach(el => el.classList.remove('input-error'));
}