"use client";
import React, { useState } from 'react';

export default function DeleteSnack({ snack, deleteSnack }) {
    const [showDelete, setShowDelete] = useState(false);

    const handleDelete = () => {
        deleteSnack(snack.id);
        setShowDelete(false);
    };

    return (
        <div className="bg-red-100 border border-red-200 rounded-lg shadow-md p-6">
            {showDelete ? (
                <>
                    <p className="mb-4">
                        Are you sure you want to delete the snack <strong>{snack.name}</strong>?
                    </p>
                    <div className="flex space-x-3">
                        <button
                            onClick={handleDelete}
                            className="bg-red-600 text-white rounded p-2 hover:bg-red-700 transition-colors duration-200"
                        >
                            Confirm Delete
                        </button>
                        <button
                            onClick={() => setShowDelete(false)}
                            className="bg-gray-300 text-gray-700 rounded p-2 hover:bg-gray-400 transition-colors duration-200"
                        >
                            Cancel
                        </button>
                    </div>
                </>
            ) : (
                <button
                    onClick={() => setShowDelete(true)}
                    className="bg-red-600 text-white rounded p-2 hover:bg-red-700 transition-colors duration-200"
                >
                    Delete Snack
                </button>
            )}
        </div>
    );
}