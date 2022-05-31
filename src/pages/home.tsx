import React from 'react';

export function Home({ state }: { state: number }) {
    const accountTypes = ['Personal', 'Pro', 'Business'];

    const form1 = (
        <form action="">
            <div>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="LastName" />
            </div>
            <div>
                <input type="date" name="birthDate" id="BirthDate" />
                <p>Tienes X años</p>
            </div>
            <div>
                <input type="radio" value="Male" name="gender" /> Male
                <input type="radio" value="Female" name="gender" /> Female
                <input type="radio" value="Other" name="gender" /> Other
                <input type="radio" value="NSNC" name="gender" /> Prefer not to
                mention
            </div>
            <div>
                <input type="email" name="mail" id="mail" placeholder="email" />
            </div>
            <div>
                <label htmlFor="news">
                    Do you want to recibe our newsletter?
                </label>
                <input type="checkbox" name="news" id="news" />
            </div>
        </form>
    );

    const form2 = (
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

    if (state === 1) {
        return form1;
    } else if (state === 2) {
        return form2;
    }
    return <></>;
}
