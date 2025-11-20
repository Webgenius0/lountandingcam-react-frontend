import React, { useState } from 'react'
import DeleteSvg from '../../svg/DeleteSvg'
import DeleteAccountModal from '../../common/DeleteAccountModal';

export default function AccountDelete() {

    const [deleteModalOpen, setDeleteModalOpen] = useState(false);

    const handleDeleteAccount = () => {
        setDeleteModalOpen(false)
        alert('hello')
    }

  return (
    <div className='flex flex-col items-center lg:py-30 justify-center p-4 text-center'>
        <div className='rounded-full bg-red-100 p-3' ><DeleteSvg/></div>
        <h2 className='md:text-2xl mt-6 font-bold'>Are you sure you want to delete your account?</h2>
        <p className='lg:w-8/12 text-sm md:text-base opacity-70 mt-2' >Once deleted, your account and all saved data (journal entries, fashion picks, finance logs, and designs) will be permanently removed. This action cannot be undone.</p>
        <button
         onClick={() => setDeleteModalOpen(true)}
        className='rounded-full px-6 py-3 bg-red-500 mt-6 hover:bg-red-500/50 duration-300 ease-in-out cursor-pointer text-white' >Delete Account</button>
           <DeleteAccountModal
                  open={deleteModalOpen}
                  onClose={() => setDeleteModalOpen(false)}
                  onConfirm={handleDeleteAccount}
                />
    </div>
  )
}
