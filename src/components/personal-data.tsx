import React from 'react';
export function PersonalData({
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
                    placeholder="Name"
                    value={formData.name}
                    onChange={(ev) =>
                        setFormData({ ...formData, name: ev.target.value })
                    }
                />
                <input
                    type="text"
                    placeholder="LastName"
                    value={formData.lastName}
                    onChange={(ev) =>
                        setFormData({ ...formData, lastName: ev.target.value })
                    }
                />
            </div>
            <div>
                <input
                    type="date"
                    name="birthDate"
                    id="BirthDate"
                    value={formData.birthday}
                    onChange={(ev) =>
                        setFormData({ ...formData, birthday: ev.target.value })
                    }
                />
                <p>Tienes X años</p>
            </div>
            <div>
                <input
                    type="radio"
                    value={formData.gender}
                    name="gender"
                    onChange={(ev) =>
                        setFormData({ ...formData, gender: ev.target.value })
                    }
                />{' '}
                Male
                <input
                    type="radio"
                    value={formData.gender}
                    name="gender"
                    onChange={(ev) =>
                        setFormData({ ...formData, gender: ev.target.value })
                    }
                />{' '}
                Female
                <input
                    type="radio"
                    value={formData.gender}
                    name="gender"
                    onChange={(ev) =>
                        setFormData({ ...formData, gender: ev.target.value })
                    }
                />{' '}
                Other
                <input
                    type="radio"
                    value={formData.gender}
                    name="gender"
                    onChange={(ev) =>
                        setFormData({ ...formData, gender: ev.target.value })
                    }
                />{' '}
                Prefer not to mention
            </div>
            <div>
                <input
                    type="email"
                    name="mail"
                    id="mail"
                    placeholder="email"
                    value={formData.email}
                    onChange={(ev) =>
                        setFormData({ ...formData, email: ev.target.value })
                    }
                />
            </div>
            <div>
                <label htmlFor="news">
                    Do you want to recibe our newsletter?
                </label>
                <input type="checkbox" name="news" id="news" />
            </div>
        </form>
    );
}
