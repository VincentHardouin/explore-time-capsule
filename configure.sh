#!/usr/bin/env bash

read -p "What's your Time Capsule IP Address ?" time_capsule_address
read -s -p "What's your Time Capsule Disk password ?" time_capsule_password
echo ""
echo "{\"address\":\"${time_capsule_address}\", \"password\":\"${time_capsule_password}\"}" > time-capsule.json

umount /mnt/timecapsule 2>/dev/null
rm -rf /mnt/timecapsule 2>/dev/null

mkdir /mnt/timecapsule
mount.cifs //${time_capsule_address}/Data /mnt/timecapsule/ -o password="${time_capsule_password}",sec=ntlm,vers=1.0

echo "Time Capsule mounted and configuration saved"
