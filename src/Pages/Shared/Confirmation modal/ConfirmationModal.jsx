import React from 'react';

export const ConfirmationModal = ({ deletingDoc, setDeletingDoc }) => {
    // const { name } = (deletingDoc);
    // optional chainging na korle error debe

    return (
        <div>
            {/* The button to open modal */}

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="Confirmation-Modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Are you sure to delete {deletingDoc?.name} </h3>
                    <p className="py-4 text-error font-semibold">If you proceed .It cann't be undone!</p>
                    <div className="modal-action">
                        <label className="btn btn-error" >Ok!</label>
                        <label htmlFor="Confirmation-Modal" onClick={() => { setDeletingDoc(null) }} className="btn btn-outline btn-info">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    )
}
