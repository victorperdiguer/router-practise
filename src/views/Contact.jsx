import React from 'react'

export default function Contact() {
  return (
    <div>
      <h1>Contact me</h1>
      <form>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <button>Send!</button>
      </form>
    </div>
  )
}
