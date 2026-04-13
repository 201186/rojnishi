export default function DeleteAccount() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6">

      <h1 className="text-4xl font-bold mb-6">
        Delete Account & Data
      </h1>

      <p>
        Users have the right to request deletion of their account and
        associated data from our system.
      </p>

      <h2 className="text-2xl font-semibold mt-8">
        What data will be deleted
      </h2>

      <ul className="list-disc ml-6 mt-3">
        <li>User name</li>
        <li>Email address</li>
        <li>School details</li>
        <li>Account related data</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8">
        How to request deletion
      </h2>

      <p className="mt-2">
        To request deletion of your account and personal data,
        please send an email to:
      </p>

      <p className="font-medium mt-2">
        teacherdailybook@gmail.com
      </p>

      <p className="mt-4">
        Please include your registered email address in the request
        so we can identify your account.
      </p>

      <h2 className="text-2xl font-semibold mt-8">
        Data deletion timeline
      </h2>

      <p className="mt-2">
        Once we receive the deletion request, your account and all
        associated data will be permanently deleted within 7 days.
      </p>

    </div>
  );
}