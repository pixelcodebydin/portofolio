import Swal from 'sweetalert2';

const ConfirmAlert = (message) => {
    return Swal.fire({
        text: message,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'Cancel',
        confirmButtonColor: '#FF8500'
    }).then((result) => {
        return result.isConfirmed;
    });
};

const SuccessAlert = (message) => {
    return Swal.fire({
        text: message,
        icon: 'success',
        confirmButtonColor: '#FF8500'
    });
};

const FailedAlert = (message) => {
    return Swal.fire({
        text: message,
        icon: 'error',
        confirmButtonColor: '#FF8500'
    });
};

export { ConfirmAlert, SuccessAlert, FailedAlert };
