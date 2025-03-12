import { h } from 'preact';
import { useState } from 'preact/hooks';

export default function Greeting({messages}) {

    const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

    const [greeting, setGreeting] = useState(messages[0]);

    return (
    <div>
        <h3 class="block font-bold font-xl mt-4 mb-4 ml-0 mr-0 ">{greeting} ! Merci de votre visite !</h3>
        <button class="block border rounded-lg text-sm py-1 px-6 hover:bg-blue hover:text-white" onClick={() => setGreeting(randomMessage())}>
        Nouvelle salutation
        </button>
    </div>
    );
}