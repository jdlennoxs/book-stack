import React from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  RedditShareButton,
  BlueskyShareButton,
} from 'react-share';
import {
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandReddit,
  IconBrandBluesky,
  IconBrandInstagram,
  IconLink,
  IconDownload,
  IconX,
  IconSquarePlus
} from '@tabler/icons-react';

interface ShareModalProps {
  id: string;
  url: string;
  text: string;
  onDownload: () => void;
  onCopy: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({
  id,
  url,
  text,
  onDownload,
  onCopy
}) => {
  const socialButtons = [
    {
      component: FacebookShareButton,
      icon: IconBrandFacebook,
      label: 'Facebook',
      props: { url, hashtag: '#BookStack' }
    },
    {
      component: BlueskyShareButton,
      icon: IconBrandBluesky,
      label: 'Bluesky',
      props: { url, title: text }
    },
    {
      component: TwitterShareButton,
      icon: IconBrandTwitter,
      label: 'X (Twitter)',
      props: { url, title: text }
    },
    {
      component: RedditShareButton,
      icon: IconBrandReddit,
      label: 'Reddit',
      props: { url, title: text }
    },
  ];

  const handleInstagramAction = (type: 'post' | 'story') => {
    onDownload();
    onCopy();

    // Attempt to open the Instagram app directly
    // This is a "deep link" that works on most mobile devices
    window.location.href = 'instagram://';

    // Fallback if the app doesn't open instantly
    setTimeout(() => {
      window.alert(`✅ Image saved & link copied!\n\nIf Instagram didn't open, please open it manually to share your ${type}!`);
    }, 1500);
  };

  return (
    <dialog id={id} className="modal modal-bottom sm:modal-middle">
      <div className="modal-box bg-white/95 backdrop-blur-md border border-white/20 shadow-2xl rounded-[32px] p-8">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 text-gray-400">
            <IconX size={20} />
          </button>
        </form>

        <h3 className="font-bold text-2xl text-gray-800 text-center mb-1">Share your bookstack</h3>
        <p className="text-center text-gray-400 text-sm mb-8">Share your {text.split('read ')[1]} bookstack!</p>

        <div className="grid grid-cols-4 gap-6 sm:gap-8">
          {/* Instagram Post */}
          <button
            onClick={() => handleInstagramAction('post')}
            className="flex flex-col items-center gap-2 group transition-all"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-tr from-yellow-100 via-pink-100 to-purple-100 border border-pink-100 flex items-center justify-center text-pink-600 transition-all group-hover:scale-105 shadow-sm">
              <IconSquarePlus size={28} stroke={1.5} />
            </div>
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider text-center">IG Post</span>
          </button>

          {/* Instagram Story */}
          <button
            onClick={() => handleInstagramAction('story')}
            className="flex flex-col items-center gap-2 group transition-all"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-tr from-orange-100 via-pink-100 to-purple-100 border border-pink-100 flex items-center justify-center text-pink-600 transition-all group-hover:scale-105 shadow-sm">
              <IconBrandInstagram size={28} stroke={1.5} />
            </div>
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider text-center">IG Story</span>
          </button>

          {/* Social Buttons */}
          {socialButtons.map((btn, index) => (
            <btn.component
              key={index}
              {...btn.props}
              className="flex flex-col items-center gap-2 group transition-all"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-600 transition-all group-hover:bg-gray-800 group-hover:text-white shadow-sm group-hover:border-transparent group-hover:scale-105">
                <btn.icon size={28} stroke={1.5} />
              </div>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider text-center">{btn.label}</span>
            </btn.component>
          ))}

          {/* Copy Link */}
          <button
            onClick={onCopy}
            className="flex flex-col items-center gap-2 group transition-all"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-600 transition-all group-hover:bg-gray-800 group-hover:text-white shadow-sm group-hover:border-transparent group-hover:scale-105">
              <IconLink size={28} stroke={1.5} />
            </div>
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider text-center">Copy Link</span>
          </button>

          {/* Download */}
          <button
            onClick={onDownload}
            className="flex flex-col items-center gap-2 group transition-all"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 transition-all group-hover:bg-indigo-600 group-hover:text-white shadow-sm group-hover:shadow-indigo-200 group-hover:scale-105">
              <IconDownload size={28} stroke={1.5} />
            </div>
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider text-center">Save Image</span>
          </button>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col items-center gap-2">
          <p className="text-[10px] text-gray-300 font-bold uppercase tracking-[3px]">Your Personal Link</p>
          <div className="px-4 py-2 bg-gray-50 border border-gray-100 rounded-full">
            <p className="text-xs text-gray-400 font-medium truncate max-w-[250px]">{url}</p>
          </div>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop bg-black/20 backdrop-blur-sm">
        <button tabIndex={-1}>close</button>
      </form>
    </dialog>
  );
};
