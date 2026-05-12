
export default function DeleteAccount() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 text-gray-800">

      {/* Title */}
      <h1 className="text-4xl font-bold mb-4">
        Delete Account &amp; Data
      </h1>

      <p className="text-sm text-gray-500 mb-8">
        Last updated: March 7, 2026
      </p>

      {/* Intro */}
      <p className="leading-7">
        Users have the right to request deletion of their account and
        associated personal data from our system.
      </p>

      {/* Data Section */}
      <h2 className="text-2xl font-semibold mt-12">
        What Data Will Be Deleted
      </h2>

      <p className="mt-4 leading-7">
        When an account deletion request is processed, the following
        information may be permanently deleted:
      </p>

      <ul className="list-disc ml-6 mt-4 space-y-2">
        <li>User name</li>
        <li>Email address</li>
        <li>School information</li>
        <li>Schedule and educational records</li>
        <li>Account-related information stored in our system</li>
      </ul>

      {/* Request Section */}
      <h2 className="text-2xl font-semibold mt-12">
        How to Request Deletion
      </h2>

      <p className="mt-4 leading-7">
        To request deletion of your account and personal data,
        please send an email to:
      </p>

      <a
        href="mailto:teacherdailybook@gmail.com"
        className="mt-4 inline-block font-medium text-blue-600 hover:underline break-all"
      >
        teacherdailybook@gmail.com
      </a>

      <p className="mt-6 leading-7">
        Please include your registered email address in the request
        so we can correctly identify your account.
      </p>

      {/* Timeline */}
      <h2 className="text-2xl font-semibold mt-12">
        Data Deletion Timeline
      </h2>

      <p className="mt-4 leading-7">
        Once we receive and verify the deletion request, the account
        and associated personal data will be permanently deleted
        within 7 working days.
      </p>

      {/* Contact */}
      <h2 className="text-2xl font-semibold mt-12">
        Contact Us
      </h2>

      <p className="mt-4 leading-7">
        If you have any questions regarding account or data deletion,
        please contact us:
      </p>

      <a
        href="mailto:teacherdailybook@gmail.com"
        className="mt-4 inline-block font-medium text-blue-600 hover:underline break-all"
      >
        teacherdailybook@gmail.com
      </a>

    </div>
  );
}

