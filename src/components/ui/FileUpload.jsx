import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import { message, Upload } from 'antd'
import { useState } from 'react'
import useThemeContext from '../../hooks/useThemeContext.js'

const getBase64 = (img, callback) => {
  // read the file and show preview
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result))
  reader.readAsDataURL(img)
}

const beforeUpload = (file) => {
  // check if image is jpg or png
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!')
  }
  // check if image size is less than 2 megabytes
  const isLt2M = file.size / 1024 / 1024 < 2
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!')
  }
  return isJpgOrPng && isLt2M
}

const FileUpload = () => {
  const { isLight } = useThemeContext()
  const [loading, setLoading] = useState(false)
  const [imageUrl, setImageUrl] = useState()

  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true)
      return
    }
    if (info.file.status === 'done') {
      // Get this url from response
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false)
        setImageUrl(url)
      })
    }
  }

  const uploadButton = (
    <button
      style={{
        border: 0,
        background: 'none',
      }}
      type='button'
    >
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  )

  return (
    <Upload
      name='avatar'
      listType='picture-card'
      className={`avatar-uploader ${
        isLight ? 'text-black' : 'text-white'
      } !flex !justify-center`}
      showUploadList={false}
      action='https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188' // this is responsible to show the image after user selects it
      beforeUpload={beforeUpload}
      onChange={handleChange}
    >
      {imageUrl ? (
        <img
          src={imageUrl}
          alt='avatar'
          style={{
            width: '100%',
          }}
        />
      ) : (
        uploadButton
      )}
    </Upload>
  )
}
export default FileUpload
