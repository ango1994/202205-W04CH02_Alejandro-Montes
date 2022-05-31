import React from 'react';
const accountTypes = ['Personal', 'Pro', 'Business'];
export function Form2() {
    return (
        <form action="">
            <div>
                <input type="text" /> Username
            </div>
            <div>
                <input type="password" /> Pasword
            </div>
            <div>
                <input type="password" name="" id="" /> Repeat paswword
            </div>
            <div>
                <select name="" id="">
                    <option value=""></option>
                    {accountTypes.map((type) => (
                        <option key={type}>{type}</option>
                    ))}
                </select>
            </div>
        </form>
    );
}
