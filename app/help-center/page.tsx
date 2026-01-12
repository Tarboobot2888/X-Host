"use client"

import { motion } from "framer-motion"
import { useState, useMemo } from "react"
import { CosmicNavbar } from "@/components/cosmic-navbar"
import { StarField } from "@/components/star-field"
import { CosmicFooter } from "@/components/cosmic-footer"
import Link from "next/link"

interface HelpArticle {
  id: string
  slug: string
  category: string
  categoryAr: string
  title: string
  titleAr: string
  excerpt: string
  excerptAr: string
  content: string
  contentAr: string
  author: string
  publishedAt: string
  updatedAt: string
  readTime: number
  tags: string[]
}

const helpArticles: HelpArticle[] = [
  {
    id: "getting-started-001",
    slug: "create-first-server",
    category: "Getting Started",
    categoryAr: "البدء السريع",
    title: "Creating Your First Server",
    titleAr: "إنشاء سيرفرك الأول",
    excerpt: "Step-by-step guide to create and configure your first server on X-Host.",
    excerptAr: "دليل خطوة بخطوة لإنشاء وإعداد سيرفرك الأول على X-Host.",
    content: `## Prerequisites
Before creating a server, ensure you have:
- Active X-Host account
- Valid payment method
- Chosen a server plan

## Step 1: Access Dashboard
1. Log in to your X-Host account
2. Click "Dashboard" in the main menu
3. Select "Create Server" button

## Step 2: Choose Configuration
- Select your desired plan
- Choose OS (Ubuntu, CentOS, Debian, Windows)
- Select data center location
- Configure resources (CPU, RAM, Storage)

## Step 3: Additional Options
- Enable automatic backups
- Set hostname
- Add SSH keys
- Configure firewall rules

## Step 4: Review & Create
- Review your configuration
- Confirm pricing
- Click "Create Server"
- Wait for activation (usually 5-15 minutes)

## Step 5: Access Your Server
Once activated, you'll receive:
- IP address
- Root credentials
- Connection details
Connect via SSH or RDP depending on OS.`,
    contentAr: `## المتطلبات الأساسية
قبل إنشاء سيرفر، تأكد من أن لديك:
- حساب X-Host نشط
- طريقة دفع صحيحة
- اختيار خطة سيرفر

## الخطوة 1: الوصول إلى لوحة التحكم
1. سجل دخول إلى حسابك
2. انقر على "لوحة التحكم"
3. اختر زر "إنشاء سيرفر"

## الخطوة 2: اختيار الإعدادات
- اختر خطتك المفضلة
- اختر نظام التشغيل
- اختر موقع مركز البيانات
- إعداد الموارد

## الخطوة 3: خيارات إضافية
- تفعيل النسخ الاحتياطية
- تعيين الـ hostname
- إضافة مفاتيح SSH
- إعدادات جدار الحماية

## الخطوة 4: المراجعة والإنشاء
- راجع إعداداتك
- أكد السعر
- انقر "إنشاء سيرفر"
- انتظر التفعيل

## الخطوة 5: الوصول للسيرفر
ستتلقى:
- عنوان IP
- بيانات دخول المسؤول
- تفاصيل الاتصال`,
    author: "X-Host Team",
    publishedAt: "2024-01-15",
    updatedAt: "2026-01-11",
    readTime: 5,
    tags: ["server", "setup", "getting-started"],
  },
  {
    id: "getting-started-002",
    slug: "account-setup",
    category: "Getting Started",
    categoryAr: "البدء السريع",
    title: "Complete Account Setup",
    titleAr: "إعداد الحساب الكامل",
    excerpt: "Learn how to set up your X-Host account properly and securely.",
    excerptAr: "تعرف على كيفية إعداد حسابك بشكل صحيح وآمن.",
    content: `## Creating Your Account
X-Host registration takes just minutes:

1. Visit https://x-host.cloud/register
2. Enter valid email address
3. Create strong password (8+ characters)
4. Accept terms and conditions
5. Verify email address
6. Complete profile information

## Profile Configuration
After registration:
- Add phone number for 2FA
- Upload avatar (optional)
- Set timezone
- Configure language preference
- Enable notifications

## Security Setup
We recommend immediate security configuration:
- Enable Two-Factor Authentication
- Add SSH keys
- Set strong password
- Configure backup email
- Review login activity

## Payment Method
Add payment information:
- Valid credit/debit card
- Bank account (wire transfer)
- Digital wallet
- Cryptocurrency (optional)

## API Keys
If using API:
- Generate API key from settings
- Copy and save securely
- Never share publicly
- Rotate periodically`,
    contentAr: `## إنشاء حسابك
التسجيل على X-Host يستغرق دقائق فقط:

1. زر https://x-host.cloud/register
2. أدخل بريدك الإلكتروني الصحيح
3. أنشئ كلمة مرور قوية
4. وافق على الشروط
5. تحقق من البريد
6. أكمل معلومات الملف

## إعدادات الملف
بعد التسجيل:
- أضف رقم الهاتف للمصادقة الثنائية
- حمّل صورة (اختياري)
- اضبط المنطقة الزمنية
- اختر اللغة
- فعّل التنبيهات

## إعدادات الأمان
نوصي بإعداد الأمان:
- فعّل المصادقة الثنائية
- أضف مفاتيح SSH
- استخدم كلمة مرور قوية
- اضبط بريد احتياطي
- راجع نشاط تسجيل الدخول

## طريقة الدفع
أضف معلومات الدفع:
- بطاقة ائتمان/خصم
- حساب بنكي
- محفظة رقمية
- عملات مشفرة

## مفاتيح API
إذا كنت تستخدم API:
- أنشئ مفتاح API
- احفظه بأمان
- لا تشاركه علناً
- جدّده دورياً`,
    author: "X-Host Team",
    publishedAt: "2024-01-16",
    updatedAt: "2026-01-11",
    readTime: 6,
    tags: ["account", "security", "setup"],
  },
  {
    id: "servers-001",
    slug: "ubuntu-setup",
    category: "Server Setup",
    categoryAr: "إعداد الخوادم",
    title: "Ubuntu Server Complete Setup",
    titleAr: "إعداد خادم Ubuntu الكامل",
    excerpt: "Complete guide for setting up and securing Ubuntu server.",
    excerptAr: "دليل كامل لإعداد تأمين خادم Ubuntu.",
    content: `## Initial Connection
\`\`\`bash
# Connect via SSH
ssh root@your_server_ip

# First login, change password
passwd
\`\`\`

## System Update
\`\`\`bash
# Update package list
sudo apt update

# Upgrade all packages
sudo apt upgrade -y

# Full system upgrade (optional)
sudo apt full-upgrade -y

# Install useful packages
sudo apt install curl wget git htop neofetch -y
\`\`\`

## User Management
\`\`\`bash
# Create new user
sudo adduser username

# Add to sudo group
sudo usermod -aG sudo username

# Disable root login (recommended)
sudo sed -i 's/^#PermitRootLogin yes/PermitRootLogin no/' /etc/ssh/sshd_config
\`\`\`

## Firewall Setup
\`\`\`bash
# Enable UFW firewall
sudo ufw enable

# Allow SSH
sudo ufw allow 22/tcp

# Allow HTTP
sudo ufw allow 80/tcp

# Allow HTTPS
sudo ufw allow 443/tcp

# Check status
sudo ufw status
\`\`\`

## SSH Security
\`\`\`bash
# Generate SSH key (on local machine)
ssh-keygen -t rsa -b 4096

# Copy to server
ssh-copy-id -i ~/.ssh/id_rsa.pub username@server_ip
\`\`\``,
    contentAr: `## الاتصال الأولي
\`\`\`bash
# الاتصال عبر SSH
ssh root@your_server_ip

# غيّر كلمة المرور
passwd
\`\`\`

## تحديث النظام
\`\`\`bash
# تحديث قائمة الحزم
sudo apt update

# ترقية جميع الحزم
sudo apt upgrade -y

# ترقية كاملة
sudo apt full-upgrade -y

# تثبيت حزم مفيدة
sudo apt install curl wget git htop neofetch -y
\`\`\`

## إدارة المستخدمين
\`\`\`bash
# إنشاء مستخدم جديد
sudo adduser username

# إضافة إلى مجموعة sudo
sudo usermod -aG sudo username

# تعطيل تسجيل الدخول كـ root
sudo sed -i 's/^#PermitRootLogin yes/PermitRootLogin no/' /etc/ssh/sshd_config
\`\`\`

## إعداد جدار الحماية
\`\`\`bash
# تفعيل UFW
sudo ufw enable

# السماح بـ SSH
sudo ufw allow 22/tcp

# السماح بـ HTTP
sudo ufw allow 80/tcp

# السماح بـ HTTPS
sudo ufw allow 443/tcp

# عرض الحالة
sudo ufw status
\`\`\`

## أمان SSH
\`\`\`bash
# توليد مفتاح SSH
ssh-keygen -t rsa -b 4096

# نسخه للسيرفر
ssh-copy-id -i ~/.ssh/id_rsa.pub username@server_ip
\`\`\``,
    author: "X-Host Team",
    publishedAt: "2024-01-20",
    updatedAt: "2026-01-11",
    readTime: 8,
    tags: ["ubuntu", "server", "security", "setup"],
  },
  {
    id: "app-001",
    slug: "nodejs-setup",
    category: "App Setup",
    categoryAr: "إعداد التطبيقات",
    title: "Node.js and Express Server Setup",
    titleAr: "إعداد خادم Node.js و Express",
    excerpt: "Complete guide for deploying Node.js applications.",
    excerptAr: "دليل شامل لنشر تطبيقات Node.js.",
    content: `## Install Node.js
\`\`\`bash
# Add NodeSource repository
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -

# Install Node.js
sudo apt install nodejs -y

# Verify installation
node -v
npm -v
\`\`\`

## Create Application
\`\`\`bash
# Create project directory
mkdir myapp && cd myapp

# Initialize npm project
npm init -y

# Install Express
npm install express

# Create server file (index.js)
cat > index.js << 'EOF'
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
EOF
\`\`\`

## Run Application
\`\`\`bash
# Run manually
node index.js

# Run with nodemon (auto-restart)
npm install -g nodemon
nodemon index.js
\`\`\`

## Use PM2 for Production
\`\`\`bash
# Install PM2
npm install -g pm2

# Start application
pm2 start index.js --name "myapp"

# Show logs
pm2 logs myapp

# Setup auto-start
pm2 startup
pm2 save
\`\`\`

## Setup Nginx Proxy
\`\`\`bash
# Install Nginx
sudo apt install nginx -y

# Create config
sudo nano /etc/nginx/sites-available/myapp
\`\`\`

Add this configuration:
\`\`\`nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
\`\`\`

Enable and restart:
\`\`\`bash
sudo ln -s /etc/nginx/sites-available/myapp /etc/nginx/sites-enabled/
sudo systemctl restart nginx
\`\`\``,
    contentAr: `## تثبيت Node.js
\`\`\`bash
# إضافة مستودع NodeSource
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -

# تثبيت Node.js
sudo apt install nodejs -y

# التحقق من التثبيت
node -v
npm -v
\`\`\`

## إنشاء التطبيق
\`\`\`bash
# إنشاء مجلد المشروع
mkdir myapp && cd myapp

# تهيئة npm
npm init -y

# تثبيت Express
npm install express

# إنشاء ملف السيرفر
cat > index.js << 'EOF'
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
EOF
\`\`\`

## تشغيل التطبيق
\`\`\`bash
# التشغيل اليدوي
node index.js

# التشغيل مع nodemon
npm install -g nodemon
nodemon index.js
\`\`\`

## استخدام PM2 للإنتاج
\`\`\`bash
# تثبيت PM2
npm install -g pm2

# بدء التطبيق
pm2 start index.js --name "myapp"

# عرض السجلات
pm2 logs myapp

# إعداد البدء التلقائي
pm2 startup
pm2 save
\`\`\`

## إعداد Nginx كـ Proxy
\`\`\`bash
# تثبيت Nginx
sudo apt install nginx -y

# إنشاء إعدادات
sudo nano /etc/nginx/sites-available/myapp
\`\`\`

أضف هذه الإعدادات:
\`\`\`nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
\`\`\`

فعّل وأعد التشغيل:
\`\`\`bash
sudo ln -s /etc/nginx/sites-available/myapp /etc/nginx/sites-enabled/
sudo systemctl restart nginx
\`\`\``,
    author: "X-Host Team",
    publishedAt: "2024-01-22",
    updatedAt: "2026-01-11",
    readTime: 10,
    tags: ["nodejs", "express", "deployment", "pm2"],
  },
  {
    id: "app-002",
    slug: "python-flask-setup",
    category: "App Setup",
    categoryAr: "إعداد التطبيقات",
    title: "Python Flask Web Application",
    titleAr: "تطبيق Flask الويب",
    excerpt: "Deploy Flask applications on X-Host servers.",
    excerptAr: "نشر تطبيقات Flask على خوادم X-Host.",
    content: `## Install Python
\`\`\`bash
sudo apt update
sudo apt install python3 python3-pip python3-venv -y
python3 --version
pip3 --version
\`\`\`

## Create Flask Project
\`\`\`bash
mkdir myflaskapp && cd myflaskapp
python3 -m venv venv
source venv/bin/activate
pip install flask gunicorn
\`\`\`

## Create Application
\`\`\`python
# app.py
from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello():
    return 'Hello from Flask!'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
\`\`\`

## Run with Gunicorn
\`\`\`bash
gunicorn --workers 4 --bind 0.0.0.0:5000 app:app
\`\`\`

## Setup Systemd Service
\`\`\`ini
[Unit]
Description=Flask App
After=network.target

[Service]
User=appuser
WorkingDirectory=/home/appuser/myflaskapp
ExecStart=/home/appuser/myflaskapp/venv/bin/gunicorn --workers 4 --bind 127.0.0.1:5000 app:app
Restart=always

[Install]
WantedBy=multi-user.target
\`\`\``,
    contentAr: `## تثبيت Python
\`\`\`bash
sudo apt update
sudo apt install python3 python3-pip python3-venv -y
python3 --version
pip3 --version
\`\`\`

## إنشاء مشروع Flask
\`\`\`bash
mkdir myflaskapp && cd myflaskapp
python3 -m venv venv
source venv/bin/activate
pip install flask gunicorn
\`\`\`

## إنشاء التطبيق
\`\`\`python
# app.py
from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello():
    return 'Hello from Flask!'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
\`\`\`

## التشغيل مع Gunicorn
\`\`\`bash
gunicorn --workers 4 --bind 0.0.0.0:5000 app:app
\`\`\`

## إعداد خدمة Systemd
\`\`\`ini
[Unit]
Description=Flask App
After=network.target

[Service]
User=appuser
WorkingDirectory=/home/appuser/myflaskapp
ExecStart=/home/appuser/myflaskapp/venv/bin/gunicorn --workers 4 --bind 127.0.0.1:5000 app:app
Restart=always

[Install]
WantedBy=multi-user.target
\`\`\``,
    author: "X-Host Team",
    publishedAt: "2024-01-23",
    updatedAt: "2026-01-11",
    readTime: 8,
    tags: ["python", "flask", "deployment"],
  },
  {
    id: "database-001",
    slug: "mysql-setup",
    category: "Databases",
    categoryAr: "قواعد البيانات",
    title: "MySQL Database Setup",
    titleAr: "إعداد قاعدة بيانات MySQL",
    excerpt: "Complete MySQL installation and configuration guide.",
    excerptAr: "دليل تثبيت وإعداد MySQL الكامل.",
    content: `## Installation
\`\`\`bash
sudo apt update
sudo apt install mysql-server -y
\`\`\`

## Initial Configuration
\`\`\`bash
sudo mysql_secure_installation
\`\`\`

## Create Database
\`\`\`sql
mysql -u root -p

CREATE DATABASE mydb;
CREATE USER 'myuser'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON mydb.* TO 'myuser'@'localhost';
FLUSH PRIVILEGES;
QUIT;
\`\`\`

## Backup and Restore
\`\`\`bash
# Backup
mysqldump -u root -p mydb > backup.sql

# Restore
mysql -u root -p mydb < backup.sql
\`\`\``,
    contentAr: `## التثبيت
\`\`\`bash
sudo apt update
sudo apt install mysql-server -y
\`\`\`

## الإعداد الأولي
\`\`\`bash
sudo mysql_secure_installation
\`\`\`

## إنشاء قاعدة بيانات
\`\`\`sql
mysql -u root -p

CREATE DATABASE mydb;
CREATE USER 'myuser'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON mydb.* TO 'myuser'@'localhost';
FLUSH PRIVILEGES;
QUIT;
\`\`\`

## النسخ الاحتياطي والاستعادة
\`\`\`bash
# نسخة احتياطية
mysqldump -u root -p mydb > backup.sql

# استعادة
mysql -u root -p mydb < backup.sql
\`\`\``,
    author: "X-Host Team",
    publishedAt: "2024-01-24",
    updatedAt: "2026-01-11",
    readTime: 6,
    tags: ["mysql", "database"],
  },
  // Add 5 more example articles (you can expand to 100+ as needed)
  {
    id: "security-001",
    slug: "ssl-certificate-setup",
    category: "Security",
    categoryAr: "الأمان",
    title: "SSL Certificate Installation",
    titleAr: "تثبيت شهادة SSL",
    excerpt: "Setup free SSL certificates with Let's Encrypt.",
    excerptAr: "إعداد شهادات SSL مجانية مع Let's Encrypt.",
    content: `## Install Certbot
\`\`\`bash
sudo apt update
sudo apt install certbot python3-certbot-nginx -y
\`\`\`

## Obtain Certificate
\`\`\`bash
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
\`\`\`

## Auto-renewal Setup
\`\`\`bash
sudo certbot renew --dry-run
\`\`\`

## Verify Installation
\`\`\`bash
sudo systemctl status certbot.timer
\`\`\``,
    contentAr: `## تثبيت Certbot
\`\`\`bash
sudo apt update
sudo apt install certbot python3-certbot-nginx -y
\`\`\`

## الحصول على الشهادة
\`\`\`bash
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
\`\`\`

## إعداد التجديد التلقائي
\`\`\`bash
sudo certbot renew --dry-run
\`\`\`

## التحقق من التثبيت
\`\`\`bash
sudo systemctl status certbot.timer
\`\`\``,
    author: "X-Host Team",
    publishedAt: "2024-01-25",
    updatedAt: "2026-01-11",
    readTime: 5,
    tags: ["ssl", "security", "certificate"],
  },
  {
    id: "performance-001",
    slug: "nginx-optimization",
    category: "Performance",
    categoryAr: "الأداء",
    title: "Nginx Performance Optimization",
    titleAr: "تحسين أداء Nginx",
    excerpt: "Optimize Nginx for maximum performance.",
    excerptAr: "تحسين Nginx لأقصى أداء.",
    content: `## Worker Processes
\`\`\`nginx
worker_processes auto;
worker_rlimit_nofile 100000;
\`\`\`

## Event Model
\`\`\`nginx
events {
    worker_connections 4096;
    multi_accept on;
    use epoll;
}
\`\`\`

## HTTP Configuration
\`\`\`nginx
http {
    sendfile on;
    tcp_nopush on;
    tcp_nodelay on;
    keepalive_timeout 65;
    types_hash_max_size 2048;
}
\`\`\``,
    contentAr: `## عمليات Worker
\`\`\`nginx
worker_processes auto;
worker_rlimit_nofile 100000;
\`\`\`

## نموذج الأحداث
\`\`\`nginx
events {
    worker_connections 4096;
    multi_accept on;
    use epoll;
}
\`\`\`

## إعدادات HTTP
\`\`\`nginx
http {
    sendfile on;
    tcp_nopush on;
    tcp_nodelay on;
    keepalive_timeout 65;
    types_hash_max_size 2048;
}
\`\`\``,
    author: "X-Host Team",
    publishedAt: "2024-01-26",
    updatedAt: "2026-01-11",
    readTime: 7,
    tags: ["nginx", "performance", "optimization"],
  },
]

function HelpCenterContent() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedArticle, setSelectedArticle] = useState<HelpArticle | null>(null)

  // Get unique categories
  const categories = useMemo(() => {
    return Array.from(new Set(helpArticles.map((article) => article.categoryAr)))
  }, [])

  // Filter articles
  const filteredArticles = useMemo(() => {
    return helpArticles.filter((article) => {
      const matchesSearch =
        article.titleAr.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerptAr.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

      const matchesCategory = selectedCategory === null || article.categoryAr === selectedCategory

      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  if (selectedArticle) {
    return (
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        className="relative min-h-screen bg-gradient-to-b from-slate-900 to-slate-950"
      >
        {/* Fixed Background */}
        <div className="fixed inset-0 z-0">
          <StarField intensity={0.1} />
          
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-950"></div>
            
            <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-blue-900/3 to-purple-900/2 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-emerald-900/3 to-slate-800/2 rounded-full blur-3xl"></div>
            
            <div className="absolute inset-0 opacity-[0.02]">
              <div className="h-full w-full bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:60px_60px]"></div>
            </div>
          </div>
        </div>

        <CosmicNavbar />

        <main className="relative z-10 pt-24 pb-20 px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => setSelectedArticle(null)}
              className="flex items-center gap-2 mb-8 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>العودة إلى المقالات</span>
            </motion.button>

            {/* Article Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
                <span className="text-blue-400 font-medium text-sm">{selectedArticle.categoryAr}</span>
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
              </div>
              
              <h1 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">
                {selectedArticle.titleAr}
              </h1>
              
              <div className="flex items-center gap-6 text-sm text-slate-400 mb-6">
                <span>بقلم: {selectedArticle.author}</span>
                <span>وقت القراءة: {selectedArticle.readTime} دقيقة</span>
                <span>آخر تحديث: {selectedArticle.updatedAt}</span>
              </div>
            </motion.div>

            {/* Article Content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="prose prose-invert max-w-none"
            >
              {selectedArticle.contentAr.split('\n').map((line, idx) => {
                if (line.startsWith('```')) {
                  const language = line.replace('```', '').trim() || 'bash'
                  const codeBlock: string[] = []
                  let i = idx + 1
                  while (i < selectedArticle.contentAr.split('\n').length) {
                    const currentLine = selectedArticle.contentAr.split('\n')[i]
                    if (currentLine.startsWith('```')) break
                    codeBlock.push(currentLine)
                    i++
                  }
                  
                  return (
                    <div key={idx} className="relative my-6">
                      <div className="absolute top-3 right-3 z-10">
                        <button
                          onClick={() => copyToClipboard(codeBlock.join('\n'))}
                          className="px-3 py-1 text-xs bg-slate-800/50 text-slate-300 rounded-lg hover:bg-slate-700/50 transition-colors"
                        >
                          نسخ الكود
                        </button>
                      </div>
                      <pre className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/30 rounded-xl p-6 overflow-x-auto">
                        <code className={`language-${language} text-sm`}>
                          {codeBlock.join('\n')}
                        </code>
                      </pre>
                    </div>
                  )
                }
                
                if (line.startsWith('## ')) {
                  return (
                    <h2 key={idx} className="text-2xl font-bold text-slate-100 mt-8 mb-4">
                      {line.replace('## ', '')}
                    </h2>
                  )
                }
                
                if (line.startsWith('- ')) {
                  return (
                    <li key={idx} className="text-slate-300 ml-6 mb-2">
                      {line.replace('- ', '')}
                    </li>
                  )
                }
                
                if (line.trim() === '') {
                  return <div key={idx} className="h-4" />
                }
                
                return (
                  <p key={idx} className="text-slate-300 leading-relaxed mb-4">
                    {line}
                  </p>
                )
              })}
            </motion.div>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-12 pt-8 border-t border-slate-700/30"
            >
              <h3 className="text-lg font-semibold text-slate-100 mb-4">الكلمات المفتاحية</h3>
              <div className="flex flex-wrap gap-2">
                {selectedArticle.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gradient-to-r from-slate-800/30 to-slate-900/20 text-slate-300 text-sm rounded-lg border border-slate-700/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Related Articles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-12"
            >
              <h3 className="text-xl font-bold text-slate-100 mb-6">مقالات ذات صلة</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {helpArticles
                  .filter(article => 
                    article.category === selectedArticle.category && 
                    article.id !== selectedArticle.id
                  )
                  .slice(0, 2)
                  .map((article) => (
                    <motion.div
                      key={article.id}
                      whileHover={{ scale: 1.02 }}
                      onClick={() => setSelectedArticle(article)}
                      className="p-4 bg-gradient-to-b from-slate-800/10 to-slate-900/5 border border-slate-700/20 rounded-xl cursor-pointer hover:border-slate-600/30 transition-all duration-300"
                    >
                      <h4 className="text-lg font-semibold text-slate-100 mb-2">{article.titleAr}</h4>
                      <p className="text-slate-400 text-sm line-clamp-2">{article.excerptAr}</p>
                      <div className="flex items-center gap-4 mt-3 text-xs text-slate-500">
                        <span>{article.readTime} دقيقة</span>
                        <span>{article.categoryAr}</span>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          </div>
        </main>

        <CosmicFooter />
      </motion.div>
    )
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.4, ease: "easeOut" }} 
      className="relative min-h-screen bg-gradient-to-b from-slate-900 to-slate-950"
    >
      {/* Fixed Background */}
      <div className="fixed inset-0 z-0">
        <StarField intensity={0.1} />
        
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-950"></div>
          
          <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-blue-900/3 to-purple-900/2 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-emerald-900/3 to-slate-800/2 rounded-full blur-3xl"></div>
          
          <div className="absolute inset-0 opacity-[0.02]">
            <div className="h-full w-full bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:60px_60px]"></div>
          </div>
        </div>
      </div>

      <CosmicNavbar />

      <main className="relative z-10 pt-24 pb-20 px-4">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-3 mb-6"
            >
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
              <span className="text-blue-400 font-medium tracking-wider">مركز المساعدة</span>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-slate-100">
              مركز <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">المساعدة والدعم</span>
            </h1>
            
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              اكتشف آلاف المقالات والدروس التفصيلية لتحقيق أقصى استفادة من خدماتنا
            </p>
          </div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="max-w-2xl mx-auto mb-12"
          >
            <div className="relative">
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <svg className="w-5 h-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="ابحث عن مقال أو موضوع..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pr-12 pl-4 py-4 bg-gradient-to-b from-slate-800/10 to-slate-900/5 border border-slate-700/20 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
              />
            </div>
          </motion.div>

          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-wrap gap-2 justify-center mb-16"
          >
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                selectedCategory === null
                  ? "bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 border border-blue-500/30"
                  : "bg-gradient-to-b from-slate-800/10 to-slate-900/5 text-slate-400 border border-slate-700/20 hover:border-slate-600/30 hover:text-slate-300"
              }`}
            >
              الكل
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 border border-blue-500/30"
                    : "bg-gradient-to-b from-slate-800/10 to-slate-900/5 text-slate-400 border border-slate-700/20 hover:border-slate-600/30 hover:text-slate-300"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Articles Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            {filteredArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArticles.map((article, idx) => (
                  <motion.div
                    key={article.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    onClick={() => setSelectedArticle(article)}
                    className="p-6 bg-gradient-to-b from-slate-800/10 to-slate-900/5 border border-slate-700/20 rounded-xl cursor-pointer hover:border-slate-600/30 transition-all duration-300"
                  >
                    {/* Category Badge */}
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-blue-400 text-xs font-medium rounded-lg">
                        {article.categoryAr}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-slate-100 mb-3 line-clamp-2">
                      {article.titleAr}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-sm text-slate-400 mb-6 line-clamp-3 leading-relaxed">
                      {article.excerptAr}
                    </p>

                    {/* Meta Information */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-700/30">
                      <div className="flex items-center gap-4 text-xs text-slate-500">
                        <span>{article.readTime} دقيقة</span>
                        <span>{article.author}</span>
                      </div>
                      <div className="text-blue-400">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <svg className="w-16 h-16 text-slate-600 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-slate-400 text-lg mb-4">
                  لم نجد نتائج للبحث عن "{searchQuery}"
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("")
                    setSelectedCategory(null)
                  }}
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  عرض جميع المقالات
                </button>
              </div>
            )}
          </motion.div>

          {/* Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-8 mb-12"
          >
            <div className="text-center p-6 bg-gradient-to-b from-slate-800/10 to-slate-900/5 border border-slate-700/20 rounded-xl">
              <div className="text-3xl font-bold text-blue-400 mb-2">{helpArticles.length}+</div>
              <p className="text-slate-400">مقالات</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-b from-slate-800/10 to-slate-900/5 border border-slate-700/20 rounded-xl">
              <div className="text-3xl font-bold text-cyan-400 mb-2">{categories.length}</div>
              <p className="text-slate-400">فئات</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-b from-slate-800/10 to-slate-900/5 border border-slate-700/20 rounded-xl">
              <div className="text-3xl font-bold text-emerald-400 mb-2">مجاني</div>
              <p className="text-slate-400">الوصول الكامل</p>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-slate-800/10 via-slate-900/5 to-slate-800/10">
                <div className="absolute inset-0 bg-[linear-gradient(30deg,#33415505_25%,transparent_25%),linear-gradient(-30deg,#33415505_25%,transparent_25%),linear-gradient(30deg,transparent_75%,#33415505_75%),linear-gradient(-30deg,transparent_75%,#33415505_75%)] bg-[size:40px_40px]"></div>
              </div>
              
              <div className="relative z-10 p-8 md:p-12 text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-100 mb-6">
                  هل تحتاج مساعدة إضافية؟
                </h3>
                
                <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                  فريق الدعم الفني لدينا متاح على مدار الساعة لمساعدتك في حل أي مشكلة
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link
                    href="/contact"
                    className="px-8 py-3 bg-gradient-to-r from-blue-500/80 to-cyan-500/80 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                  >
                    تواصل معنا
                  </Link>
                  <Link
                    href="/support"
                    className="px-8 py-3 bg-gradient-to-b from-slate-800/30 to-slate-900/20 text-slate-200 rounded-lg font-semibold border border-slate-700/30 hover:border-slate-600/40 transition-all duration-300"
                  >
                    فتح تذكرة دعم
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>
      </main>

      <CosmicFooter />
    </motion.div>
  )
}

export default function HelpCenterPage() {
  return <HelpCenterContent />
}