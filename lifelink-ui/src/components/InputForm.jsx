import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function InputForm() {
    return (
        <div>
            <div className="prompt-div">
                <input 
                    id="prompt" 
                    className="prompt-input" 
                    type="text" 
                    placeholder="Message" 
                    cols="20" 
                    rows="3" 
                />
                <div>
                    {/* <input className='prompt-submit' type='button' /> */}
                    <FontAwesomeIcon className='submit-icon' size='2x' icon={ faArrowRight } />
                </div>
            </div>
            
        </div>
    )
}

export default InputForm;
