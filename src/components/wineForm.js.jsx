import React, { Component } from 'react';

const WineForm = () => {
  return (
    <div>
      <form>
        Name <input type="text" /><br/>
        Color <input type="text" /><br/>
        Varietal <input type="text" /><br/>
        Price <input type="number" /><br/>
        Description <textarea /><br/>
        <input type="submit" />
      </form>
    </div>
  )
}

export default WineForm;