

import React from 'react'

function FileUplaod() {
  return (
    <div>
        <form action="/upload" method="POST" enctype="multipart/form-data">
  <input type="file" name="avatar" />
  <button type='submit'>upload</button>
</form>
      
    </div>
  )
}

export default FileUplaod
