# TODO: Fix Errors in Presensi API Code

- [x] Edit `prisma.service.ts` to remove the unnecessary `users: any;` property
- [x] Edit `auth.service.ts` to change `this.prisma.users.findUnique` to `this.prisma.user.findUnique`
- [x] Edit `auth.module.ts` to remove `UsersModule` import and from imports array
- [x] Run `npm run lint` to verify no more errors
