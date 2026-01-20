import { useState } from "react";

export default function Events() {
  const [inputValue, setInputValue] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  return (
    <div>
      <h1>React Event Types with TypeScript</h1>

      <h2>What is "e: React.ChangeEvent&lt;HTMLInputElement&gt;"?</h2>
      <ul>
        <li>
          <strong>e</strong> = The event parameter (you can name it anything:
          event, evt, e)
        </li>
        <li>
          <strong>:</strong> = TypeScript type annotation
        </li>
        <li>
          <strong>React.ChangeEvent</strong> = Type of event (change event from
          React)
        </li>
        <li>
          <strong>&lt;HTMLInputElement&gt;</strong> = Generic type specifying
          which HTML element
        </li>
        <li>
          <strong>e.target.value</strong> = Access the value from the input
          field
        </li>
      </ul>

      <h2>Examples:</h2>

      <div>
        <label>
          Input Field (e: React.ChangeEvent&lt;HTMLInputElement&gt;)
        </label>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <p>Value: {inputValue}</p>
      </div>

      <div>
        <label>
          Email Field (e: React.ChangeEvent&lt;HTMLInputElement&gt;)
        </label>
        <input type="email" value={email} onChange={handleEmailChange} />
        <p>Email: {email}</p>
      </div>

      <div>
        <label>
          Textarea (e: React.ChangeEvent&lt;HTMLTextAreaElement&gt;)
        </label>
        <textarea value={message} onChange={handleMessageChange} rows={4} />
        <p>Characters: {message.length}</p>
      </div>

      <h2>Common Event Types:</h2>
      <ul>
        <li>React.ChangeEvent&lt;HTMLInputElement&gt; - for input fields</li>
        <li>React.ChangeEvent&lt;HTMLTextAreaElement&gt; - for textarea</li>
        <li>
          React.ChangeEvent&lt;HTMLSelectElement&gt; - for select dropdowns
        </li>
        <li>React.MouseEvent&lt;HTMLButtonElement&gt; - for button clicks</li>
        <li>React.FormEvent&lt;HTMLFormElement&gt; - for form submits</li>
        <li>
          React.KeyboardEvent&lt;HTMLInputElement&gt; - for keyboard events
        </li>
      </ul>
    </div>
  );
}
