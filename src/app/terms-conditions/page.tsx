import React from 'react';
import Link from 'next/link';

import tw from 'tailwind-styled-components';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="xl:px-lg lg:px-md px-sm sm:mt-52 mt-32 font-serif space-y-8">
      <h1 className="text-2xl md:text-4xl font-bold mb-8 text-tertiary-300">
        Terms & Conditions
      </h1>
      <ul className="list-disc list-inside space-y-5 text-base md:text-lg">
        <li>
          Acceptance of Terms: By purchasing a ticket or entering the premises
          of SHARDHEYA SHRI ATALBIHARI VAJPAYEE VANSAPATI UDHYAN VISAPUR, you
          are agreeing to these terms and conditions. If you do not agree with
          these terms and conditions, please do not purchase tickets or enter
          the premises.
        </li>
        <li>
          Termination Clause: SHARDHEYA SHRI ATALBIHARI VAJPAYEE VANSAPATI
          UDHYAN VISAPUR reserves the right to terminate your access to the
          Garden premises for violation of these terms and conditions or any
          conduct that the Garden deems inappropriate or harmful to the Garden,
          other visitors, or the artwork.
        </li>
        <li>
          Ticket Purchase and Refunds: Once purchased, tickets are
          non-refundable and non-transferable. Any request for refunds or
          exchanges due to lost, stolen, damaged, or destroyed tickets will not
          be entertained. If the ticket is not confirmed full refund except the
          service fee will be settled by The design Institute in the same
          account from which the transaction was done within 5-7 business
          days.&nbsp;
        </li>
        <li>
          Limited Liability Clause: SHARDHEYA SHRI ATALBIHARI VAJPAYEE VANSAPATI
          UDHYAN VISAPUR will not be held liable for any direct, indirect,
          incidental, special, consequential or exemplary damages, including but
          not limited to, damages for loss of profits, goodwill, use, data or
          other intangible losses (even if the Garden has been advised of the
          possibility of such damages) arising out of or in connection with the
          use of the Garden or its services.
        </li>
        <li>
          Intellectual Property Clause: All intellectual property rights in the
          artwork, exhibits, signs, logos, and all other proprietary materials
          in the Garden are owned by Atal Botanical Garden and/or its licensors.
          Any unauthorized use of these materials is strictly prohibited and may
          result in civil and criminal penalties.
        </li>
        <li>
          Changes and Cancellations: SHARDHEYA SHRI ATALBIHARI VAJPAYEE
          VANSAPATI UDHYAN VISAPUR reserves the right to change or cancel the
          tickets at any time, for any reason, and without prior notice.
        </li>
        <li>
          Behavior and Conduct: Visitors are expected to behave appropriately
          and respectfully while inside the Garden premises. Any form of
          disruptive or disrespectful behavior may result in removal from the
          premises.
        </li>
        <li>
          Health and Safety: Visitors are responsible for their own health and
          safety. Those who are not feeling well are requested to wear masks.
          Running, pushing, or any behavior that could harm the artwork is not
          permitted.
        </li>
        <li>
          Personal Items: Umbrellas, pointers, sharp items, packages, and bags
          larger than 40 x 40 cms are not allowed inside the closed premises.
        </li>
        <li>
          Group Visits: For organized groups consisting of more than 10 people,
          there should be one designated person responsible for the group.
        </li>
        <li>
          Compliance with Local Laws: International visitors or visitors
          traveling to Chandrapur from other parts of the country are expected
          to comply with all local and state government rules and regulations.
        </li>
        <li>
          Payment Partner: Tdi is the official ticket booking partner for
          SHARDHEYA SHRI ATALBIHARI VAJPAYEE VANSAPATI UDHYAN VISAPUR. Any
          queries related to Ticket booking can be raised at&nbsp;
          <Link
            href="mailto:atalbotanicalgarden@mahaforest.gov.in"
            className="text-tertiary-100 underline"
          >
            atalbotanicalgarden@mahaforest.gov.in
          </Link>
        </li>
        <li>
          Queries and Problems: In case of any discomfort, problem, or query,
          please contact the authorities present in the SHARDHEYA SHRI
          ATALBIHARI VAJPAYEE VANSAPATI UDHYAN VISAPUR or email us at&nbsp;
          <Link
            href="mailto:atalbotanicalgarden@mahaforest.gov.in"
            className="text-tertiary-100 underline"
          >
            atalbotanicalgarden@mahaforest.gov.in
          </Link>
        </li>
      </ul>
      <br />
      <br />
      If you make a request, we have one month to respond. To exercise any of
      these rights, please contact us.
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
