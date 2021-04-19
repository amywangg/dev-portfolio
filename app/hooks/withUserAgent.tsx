import React from 'react';
import dynamic from 'next/dynamic';
import {
  WithUserAgentProps,
  useUserAgent,
  withUserAgent,
} from 'next-useragent';

const DesktopContent = dynamic(() => import('./desktop-content'));
const MobileContent = dynamic(() => import('./mobile-content'));

class IndexPage extends React.Component<WithUserAgentProps> {
  render() {
    const { ua, useragent } = this.props;

    return (
      <>
        <p>{useragent}</p>
        {ua.isMobile ? <MobileContent /> : <DesktopContent />}
      </>
    );
  }
}

export function getServerSideProps(context) {
  const ua = useUserAgent(context.req.headers['user-agent']);

  return {
    props: { ua, useragent: ua.source },
  };
}

export default withUserAgent(IndexPage);
