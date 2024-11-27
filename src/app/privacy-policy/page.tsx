import React from 'react';
import Link from 'next/link';

import tw from 'tailwind-styled-components';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="xl:px-lg lg:px-md px-sm sm:mt-52 mt-32 font-serif space-y-8">
      <h1 className="text-2xl md:text-4xl font-bold mb-8 text-tertiary-300">
        Privacy Policy
      </h1>
      <BodyText>
        At Atal Botanical Garden, accessible from{' '}
        <Link
          href="https://atalbotanicalgarden.com"
          className="text-tertiary-100 underline"
        >
          https://atalbotanicalgarden.com
        </Link>
        , one of our main priorities is the privacy of our visitors. This
        Privacy Policy document contains types of information that are collected
        and recorded by SHARDHEYA SHRI ATALBIHARI VAJPAYEE VANSAPATI UDHYAN
        VISAPUR and how we use it.
        <br />
        <br />
        If you have additional questions or require more information about our
        Privacy Policy, do not hesitate to contact us.
        <br />
        <br />
        This Privacy Policy applies only to our online activities and is valid
        for visitors to our website regarding the information that they shared
        and/or collect on&nbsp;
        <Link
          href="https://atalbotanicalgarden.com"
          className="text-tertiary-100 underline"
        >
          https://atalbotanicalgarden.com
        </Link>
        &nbsp; or partner websites. This policy does not apply to any
        information collected offline or via channels other than approved
        websites.
      </BodyText>

      <section>
        <BodyHeading>Consent</BodyHeading>
        <BodyText>
          By using our website, you hereby consent to our Privacy Policy and
          agree to its terms.
        </BodyText>
      </section>

      <section>
        <BodyHeading>Advertising Partners Privacy Policies</BodyHeading>
        <BodyText>
          You may consult this list to find the Privacy Policy for each of the
          advertising partners of SHARDHEYA SHRI ATALBIHARI VAJPAYEE VANSAPATI
          UDHYAN VISAPUR.
          <br />
          <br />
          Third-party ad servers or ad networks use technologies like cookies,
          JavaScript, or Web Beacons that are utilized in their respective
          advertisements and links appearing on our website. These technologies
          send data directly to users&apos; browsers and automatically receive
          your IP address. These technologies are used to measure the
          effectiveness of their advertising campaigns and/or to personalize the
          advertising content you see on websites.
          <br />
          <br />
          Note that we have no access to or control over these cookies used by
          third-party advertisers.
        </BodyText>
      </section>

      <section>
        <BodyHeading>Third-Party Privacy Policies</BodyHeading>
        <BodyText>
          Atal Botanical Garden&apos;s Privacy Policy does not apply to other
          advertisers or websites. We encourage you to consult the Privacy
          Policies of these third-party services for more detailed information,
          including their practices and instructions for opting out of certain
          options. You can typically find this information on their respective
          websites.
          <br />
          <br />
          You can choose to disable cookies through your browser settings. For
          detailed information about cookie management, refer to your specific
          browser&apos;s documentation.
        </BodyText>
      </section>

      <section>
        <BodyHeading>CCPA Privacy Rights</BodyHeading>
        <BodyText>
          Under the California Consumer Privacy Act (CCPA), California consumers
          have specific rights, including the following:
          <br />
          <br />
          <ul className="list-disc list-inside space-y-2">
            <li>
              Request that a business discloses the categories and specific
              pieces of personal data it has collected about consumers.
            </li>
            <li>Request that a business deletes personal data collected.</li>
            <li>
              Request that a business does not sell consumers&apos; personal
              data.
            </li>
          </ul>
          <br />
          <br />
          If you make a request, we have one month to respond. To exercise any
          of these rights, please contact us.
        </BodyText>
      </section>

      <section>
        <BodyHeading>GDPR Data Protection Rights</BodyHeading>
        <BodyText>
          We ensure you are fully aware of all your data protection rights under
          the General Data Protection Regulation (GDPR). These include:
          <br />
          <br />
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>The right to access:</strong> Request copies of your
              personal data. A small fee may apply.
            </li>
            <li>
              <strong>The right to rectification:</strong> Request corrections
              or completion of inaccurate or incomplete information.
            </li>
            <li>
              <strong>The right to erasure:</strong> Request deletion of your
              personal data under certain conditions.
            </li>
            <li>
              <strong>The right to restrict processing:</strong> Request
              limitations on data processing under certain conditions.
            </li>
            <li>
              <strong>The right to object:</strong> Object to processing of your
              personal data under certain conditions.
            </li>
            <li>
              <strong>The right to data portability:</strong> Request that data
              be transferred to another organization or directly to you.
            </li>
          </ul>
          <br />
          <br />
          If you make a request, we have one month to respond. To exercise any
          of these rights, please contact us.
        </BodyText>
      </section>

      <section>
        <BodyHeading>Children&apos;s Information</BodyHeading>
        <BodyText>
          Protecting children&apos;s privacy is a priority. We encourage parents
          and guardians to monitor their children&apos;s online activities.
          <br />
          <br />
          SHARDHEYA SHRI ATALBIHARI VAJPAYEE VANSAPATI UDHYAN VISAPUR does not
          knowingly collect personal information from children under 13 unless
          advised by the government authority. If you believe your child has
          provided such information, contact us immediately, and we will work to
          promptly remove it.
        </BodyText>
      </section>

      <footer className="text-center">
        <BodyText>
          For any questions or concerns, email us at&nbsp;
          <Link
            href="mailto:atalbotanicalgarden@mahaforest.gov.in"
            className="text-tertiary-100 underline"
          >
            atalbotanicalgarden@mahaforest.gov.in
          </Link>
        </BodyText>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;

const BodyText = tw.p`
    text-base md:text-lg
`;

const BodyHeading = tw.h2`
    text-base md:text-2xl font-semibold
`;
