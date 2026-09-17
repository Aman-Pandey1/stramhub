import { ProfileView } from '@/features/profile/ProfileView';
import { fetchProfileBundle } from '@/repositories/catalog';

export default async function ProfilePage() {
  const { profile, stories, shorts } = await fetchProfileBundle();

  return <ProfileView profile={profile} stories={stories} shorts={shorts} />;
}
