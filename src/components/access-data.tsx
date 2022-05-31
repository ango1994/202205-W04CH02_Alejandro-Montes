import React from 'react';
const accountTypes = ['Personal', 'Pro', 'Business'];
export function AccesData({
    formData,
    setFormData,
}: {
    formData: any;
    setFormData: any;
}) {
    return (
        <form action="">
            <div>
                <input
                    type="text"
                    value={formData.userName}
                    onChange={(ev) =>
                        setFormData({ ...formData, userName: ev.target.value })
                    }
                />{' '}
                Username
            </div>
            <div>
                <input
                    type="password"
                    value={formData.password}
                    onChange={(ev) =>
                        setFormData({ ...formData, password: ev.target.value })
                    }
                />{' '}
                Pasword
            </div>
            <div>
                <input
                    type="password"
                    name=""
                    id=""
                    value={formData.confirmPassword}
                    onChange={(ev) =>
                        setFormData({
                            ...formData,
                            confirmPassword: ev.target.value,
                        })
                    }
                />{' '}
                Repeat paswword
            </div>
            <div>
                <select
                    name=""
                    id=""
                    value={formData.accountType}
                    onChange={(ev) =>
                        setFormData({
                            ...formData,
                            accountType: ev.target.value,
                        })
                    }
                >
                    <option value=""></option>
                    {accountTypes.map((type) => (
                        <option key={type}>{type}</option>
                    ))}
                </select>
            </div>
        </form>
    );
}
