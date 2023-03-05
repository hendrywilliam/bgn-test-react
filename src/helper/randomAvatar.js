export const randomAvatar = () => {
  const listAvatars = [
    "https://trpsidwnzkgefmvrmziw.supabase.co/storage/v1/object/public/avatars/9.webp",
    "https://trpsidwnzkgefmvrmziw.supabase.co/storage/v1/object/public/avatars/8.webp",
    "https://trpsidwnzkgefmvrmziw.supabase.co/storage/v1/object/public/avatars/7.webp",
    "https://trpsidwnzkgefmvrmziw.supabase.co/storage/v1/object/public/avatars/6.webp",
    "https://trpsidwnzkgefmvrmziw.supabase.co/storage/v1/object/public/avatars/5.webp",
    "https://trpsidwnzkgefmvrmziw.supabase.co/storage/v1/object/public/avatars/4.webp",
    "https://trpsidwnzkgefmvrmziw.supabase.co/storage/v1/object/public/avatars/3.webp",
    "https://trpsidwnzkgefmvrmziw.supabase.co/storage/v1/object/public/avatars/2.webp",
    "https://trpsidwnzkgefmvrmziw.supabase.co/storage/v1/object/public/avatars/10.webp",
  ];

  const selectAvatar = Math.floor(Math.random() * 10);
  if (selectAvatar === 9) {
    return listAvatars[selectAvatar - 1];
  } else {
    return listAvatars[selectAvatar];
  }
};
