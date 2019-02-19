modprobe v4l2_common
cd /usr/src/app/frontend
npm run build && npm start &

cd /usr/src/app/backend
python3.6 -m main.py 
