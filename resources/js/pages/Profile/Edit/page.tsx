import { Layout } from '@/components';
import AccountSettingsForm from '@/pages/Profile/Edit/components/AccountSettingsForm';
import DeleteAccountForm from '@/pages/Profile/Edit/components/DeleteAccountForm';
import UpdatePasswordForm from '@/pages/Profile/Edit/components/UpdatePasswordForm';

interface ProfileEditPageProps {
  errors: Record<string, string>;
}

export default function Page({ errors }: ProfileEditPageProps) {
  return (
    <Layout>
      <div className="divide-white-muted/30 divide-y">
        <div className="flex flex-col gap-2 pt-2 pb-6">
          <h1 className="text-lg/7 font-semibold">Account Settings</h1>
        </div>
        <AccountSettingsForm errors={errors} />
        <UpdatePasswordForm errors={errors} />
        <DeleteAccountForm errors={errors} />
      </div>
    </Layout>
  );
}
