'use client';

import { useEffect } from 'react';

type AdSenseAdProps = {
  slot?: string;
  format?: string;
  className?: string;
};

export default function AdSenseAd({ 
  slot = '9678918545', 
  format = 'auto',
  className = '' 
}: AdSenseAdProps) {
  useEffect(() => {
    // Check if script is already added
    if (document.querySelector('script[src*="pagead2.googlesyndication.com"]')) {
      // Script already exists, just push the ad
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error('AdSense error:', e);
      }
      return;
    }

    // Load the AdSense script
    const script = document.createElement('script');
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8583624399988387';
    script.async = true;
    script.crossOrigin = 'anonymous';
    script.onload = () => {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error('AdSense error:', e);
      }
    };
    document.head.appendChild(script);

    return () => {
      // Cleanup
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [slot, format]);

  return (
    <div className={`my-4 ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-8583624399988387"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
}

// Component specifically for the autorelaxed ad format
export function AutoRelaxedAd() {
  return (
    <AdSenseAd 
      slot="4596345774" 
      format="autorelaxed"
      className="autorelaxed-ad"
    />
  );
}

// Component specifically for the vertical ad in blog posts
export function VerticalAd() {
  return (
    <div className="sticky top-24">
      <AdSenseAd 
        slot="6312752125"
        format="auto"
        className="vertical-ad"
      />
    </div>
  );
}
