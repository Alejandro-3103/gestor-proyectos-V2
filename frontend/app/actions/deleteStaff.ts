// app/actions/deleteStaff.ts
'use server'

import { deleteStaff } from '../lib/apiStaff';
import { revalidatePath } from 'next/cache';

export async function deleteStaffAction(id: number) {
  await deleteStaff(id);
  revalidatePath('/staff');
}