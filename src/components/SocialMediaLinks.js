import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SocialMediaLinks() {
  return (
    <div className="social-links">
      <a href="https://twitter.com/Phillylosophy"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
      <a href="https://awakening-journey.medium.com/"><FontAwesomeIcon icon={['fab', 'medium']} /></a>
      <a href="https://join.slack.com/t/waking-upworkspace/shared_invite/zt-kc17udt1-4R6tHNHljVMX9qxKc8OiYg"><FontAwesomeIcon icon={['fab', 'slack']} /></a>
    </div>

  );
}

export default SocialMediaLinks;
