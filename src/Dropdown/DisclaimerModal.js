import React from 'react'

const Disclimar = (onClose) => {
  return (
    <div>
      <div className="modal-overlay">
            <div className="modal-content">
              <div>
                <p >Disclaimer</p>
                <p style={{ fontSize: '12px' }}>Please check the boxes below to confirm your agreement to the Trendswap <span style={{ color: '#1d64fa' }}> Terms and conditions</span></p>
              </div>
              <div className="check-box-parent">
                <input type='checkbox'/>
                <div className="i-have-read">I have read and understood and do hereby agree to be legally bound as a ‘User’ under, the Terms, including all future amendments thereto. Such agreement is irrevocable and will apply to all of my uses of the Site without me providing confirmation in each specific instance.</div>
              </div>
              <div className="check-box-parent">
              <input type='checkbox'/>
                <div className="i-have-read">I have read and understood and do hereby agree to be legally bound as a ‘User’ under, the Terms, including all future amendments thereto. Such agreement is irrevocable and will apply to all of my uses of the Site without me providing confirmation in each specific instance.</div>
              </div>
              <button onClick={onClose} className='btn-primary'>I Understand</button>
            </div>
          </div>
      
    </div>
  )
}

export default Disclimar
