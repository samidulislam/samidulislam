import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className="footer">
        <p><span>&copy;</span> {new Date().getFullYear()} All-Rights reserved to Samid.</p>
        <div className="socials">
          <a href="https://github.com/samidulislam" target='_blank'>
            <BsGithub />
          </a>
          <a href="/">
            <BsLinkedin />
          </a>
          <a href="/">
            <BsTwitter />
          </a>
        </div>
    </div>
  )
}
export default Footer