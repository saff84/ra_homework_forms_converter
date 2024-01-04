import { useState } from 'react';

export default function Converter() {
    const [color, setColor] = useState('');

    const handlerChange = ({ target }) => {
        if (target.value.length < 7) {
            setColor('Ошибка!');
            return;
        }

        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(target.value);

        if (result === null) {
            setColor('Ошибка!');
            return;
        }

        const rgb = `${parseInt(result[1], 16)},
            ${parseInt(result[2], 16)},
            ${parseInt(result[3], 16)}`;
        setColor(`rgb(${rgb})`);
    };

    return (
        <div className="converter-color" style={{ backgroundColor: color }}>
            <div className="container">
                <input
                    className="input"
                    type="text"
                    placeholder="#xxxxxx"
                    maxLength={7}
                    onChange={handlerChange} />
                <div className="result">{color}</div>
            </div>
        </div>

    );
}