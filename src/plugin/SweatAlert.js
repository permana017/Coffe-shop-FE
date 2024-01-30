import React, { useEffect } from 'react';
import Swal from 'sweetalert2';

const SweetAlert = ({ title, text, type, show, onClose, showConfirmButton, confirmButtonText, isConfirmed }) => {
    useEffect(() => {
        if (show) {
            Swal.fire({
                title,
                text,
                icon: type,
                showConfirmButton: showConfirmButton,
                confirmButtonText: confirmButtonText,
                confirmButtonColor: '#FFBA33',
            }).then((result) => {
                if (onClose) {
                    onClose(result);
                }
                if (result.isConfirmed) {
                    isConfirmed(result)
                }
            });
        }
    }, [show, title, text, type, onClose]);

    return null;
};

export default SweetAlert;