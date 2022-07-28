import React from 'react';
import ModalForm from './ModalForm';

const BookingModal = ({treatment,date}) => {
            const {name, slots} = treatment
    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
            <div class="modal-box">
            <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 class="font-medium text-lg text-secondary pb-5">{name}</h3>
               <ModalForm date={date} treatment={treatment}></ModalForm>
            </div>
            </div>
        </div>
    );
};

export default BookingModal;