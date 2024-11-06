import React, { useState } from "react";
import InputForm from "./InputForm";

import axios from 'axios';

function ChatUI() {
    return (
        <div>
            <div>
                <input 
                    type="text" 
                    id="response"
                    className="response"
                />
            </div>

            <div>
                <input 
                    type="text"
                    id="prompt"
                    className="prompt"
                />
            </div>
        </div>
        
    )
}

export default ChatUI;