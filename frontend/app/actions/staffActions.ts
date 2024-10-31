// app/actions/staffActions.ts
'use server'

import { revalidatePath } from 'next/cache';

export async function revalidateStaffList() {
  revalidatePath('/staff');
}

