'use client';

import footerStyles from './footer.module.css';
import Button from '../button';
import Image from 'next/image';
import FooterLogo from '../../../public/assets/Frame.png';
import LinkedinIcon from '../../../public/assets/linkedin.png';
import MailingIcon from '../../../public/assets/mailing.png';
import TwitterIcon from '../../../public/assets/twitter.png';
import InstagramIcon from '../../../public/assets/instagram.png';

interface FooterProps {
    className?: string;
    contactFooter?: string;
    supportPartners?: string;
    joinSupport?: string;
    contactUs?: string;
    formatted?: string;
    inputContact?: string;
    inputContactArea?: string;
    messageBtn?: string;
    ContactsLogo?: string;
    ContactsLine?: string;
    contactCopyright?: string;
}

const Footer: React.FC<FooterProps> = ({
    className,
    contactFooter,
    supportPartners,
    joinSupport,
    contactUs,
    formatted,
    inputContact,
    inputContactArea,
    messageBtn,
    ContactsLogo,
    ContactsLine,
    contactCopyright,
}) => {

    const handleContactClick = () => {
        console.log('Contact button clicked');
    };

    return (
        <div className={`
        ${footerStyles['footer-main']} 
        ${className}`}>
            <div className={footerStyles['footer-cont']}>
                <div className={`
                    ${footerStyles["contact-footer"]
                    } ${contactFooter}`}>
                    <div className={`
                    ${footerStyles["support-partners"]} 
                    ${supportPartners}`}>
                        <h3 className={`
                    ${footerStyles['join-support']}
                     ${joinSupport}`}>
                            Support  Partner  Join
                        </h3>
                        <h3 className={`
                    ${footerStyles['contact-us']} 
                    ${contactUs}`}>
                            Contact Us
                        </h3>
                    </div>
                    <form className={`
                    ${footerStyles["form"]} 
                    ${formatted}`}>
                        <div className="info">
                            <input
                                type="text"
                                placeholder='Name'
                                className={`
                        ${footerStyles['Name']} 
                        ${inputContact}`}
                            />
                            <input
                                type="email"
                                placeholder='Email'
                                className={`
                        ${footerStyles['Email']} 
                        ${inputContact}`}
                            />
                        </div>
                        <input
                            type='text'
                            name="message"
                            id="message"
                            placeholder='Leave a message...'
                            className={`
                        ${footerStyles['text-area']
                                } ${inputContactArea}`}
                        />
                        <Button
                            label='Send message'
                            onClick={handleContactClick}
                            className={`${footerStyles['send-message']} ${messageBtn}`}
                        />
                    </form>
                </div>
            </div>
            <div className={`${footerStyles["footer-logo"]} ${ContactsLogo}`}>
                <Image src={FooterLogo} width={154} height={21} alt='Footer Logo' />
                <div className={footerStyles["social-media"]}>
                    <Image src={LinkedinIcon} width={20} height={20} alt='LinkedIn' />
                    <Image src={InstagramIcon} width={20} height={20} alt='Instagram' />
                    <Image src={MailingIcon} width={20} height={20} alt='Mailing' />
                    <Image src={TwitterIcon} width={20} height={20} alt='Twitter' />
                </div>
                <div className={`${footerStyles["line"]} ${ContactsLine}`}></div>
            </div>
            <div className={`${footerStyles["copyright"]} ${contactCopyright}`}>
                <p>© 2024 MariTest Africa. All rights reserved.</p>
                <p>Privacy Policy <span>Terms & Conditions</span></p>
            </div>
        </div>
    );
}

export default Footer;
