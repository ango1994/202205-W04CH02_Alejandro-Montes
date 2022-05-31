import React from 'react';
import { Form1 } from '../components/form1';
import { Form2 } from '../components/form2';

export function Form({ state }: { state: number }) {
    const form3 = <form action=""></form>;

    if (state === 1) {
        return <Form1></Form1>;
    } else if (state === 2) {
        return <Form2></Form2>;
    } else if (state === 3) {
        return form3;
    }
    return <></>;
}
