interface Profile {
  name: string
  age: number
  email: string
}

const updateProfile = (
  profileObject: Profile,
  updatedObject: Partial<Profile>
): Profile => {
  return { ...profileObject, ...updatedObject }
}
