"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

export default function RefundPolicyPage() {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({})

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }))
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 quantum-glass border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-cosmic-gradient">
            X-Host
          </Link>
          <nav>
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              العودة للرئيسية
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12 sm:py-16">
        {/* Page Title */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-pretty">سياسة الاسترجاع والتعويضات</h1>
          <p className="text-lg text-muted-foreground mb-2">X-Host - استضافة وسيرفرات موثوقة</p>
          <p className="text-sm text-muted-foreground">آخر تحديث: 11 يناير 2026</p>
        </div>

        {/* Introduction */}
        <div className="mb-10 p-6 bg-secondary/30 border border-border rounded-lg">
          <p className="text-base text-foreground leading-relaxed">
            تلتزم شركة X-Host بضمان رضا عملائنا عن الخدمات المقدمة. تحدد هذه السياسة الشروط والأحكام الكاملة لعملية
            الاسترجاع والتعويضات، والتي تطبق على جميع خدمات الاستضافة والسيرفرات المقدمة من الشركة. يُرجى قراءة هذه
            السياسة بعناية قبل الاشتراك في أي من خدماتنا.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="mb-12 p-6 bg-secondary/20 border border-border rounded-lg">
          <h2 className="text-xl font-bold mb-4">محتويات السياسة:</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#scope" className="text-primary hover:underline">
                1. نطاق السياسة
              </a>
            </li>
            <li>
              <a href="#definitions" className="text-primary hover:underline">
                2. التعريفات المهمة
              </a>
            </li>
            <li>
              <a href="#eligibility" className="text-primary hover:underline">
                3. أهلية الاسترجاع والشروط
              </a>
            </li>
            <li>
              <a href="#prorated" className="text-primary hover:underline">
                4. الاسترجاع الجزئي والرصيد
              </a>
            </li>
            <li>
              <a href="#non-refundable" className="text-primary hover:underline">
                5. البنود غير القابلة للاسترجاع
              </a>
            </li>
            <li>
              <a href="#wallet" className="text-primary hover:underline">
                6. سياسة الرصيد والمحفظة
              </a>
            </li>
            <li>
              <a href="#rejection" className="text-primary hover:underline">
                7. حالات رفض الاسترجاع
              </a>
            </li>
            <li>
              <a href="#process" className="text-primary hover:underline">
                8. عملية طلب الاسترجاع
              </a>
            </li>
            <li>
              <a href="#timeline" className="text-primary hover:underline">
                9. مدة المعالجة
              </a>
            </li>
            <li>
              <a href="#contact" className="text-primary hover:underline">
                10. بيانات التواصل والدعم
              </a>
            </li>
          </ul>
        </div>

        {/* Policy Sections */}
        <div className="space-y-6">
          {/* Section 1 */}
          <section id="scope" className="border border-border rounded-lg overflow-hidden transition-all duration-300">
            <button
              onClick={() => toggleSection("scope")}
              className="w-full p-6 flex items-center justify-between bg-secondary/40 hover:bg-secondary/60 transition-colors"
            >
              <h2 className="text-xl font-bold text-left">1. نطاق السياسة</h2>
              <ChevronDown
                className={`w-6 h-6 transition-transform ${expandedSections["scope"] ? "rotate-180" : ""}`}
              />
            </button>
            {expandedSections["scope"] && (
              <div className="p-6 bg-background/50 border-t border-border space-y-4">
                <p className="text-foreground">
                  تغطي هذه السياسة جميع خدمات الاستضافة والسيرفرات المقدمة من X-Host، بما في ذلك:
                </p>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold text-accent mb-2">خطط السيرفرات المدعومة:</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                      <li>X-Host Free (فترة فوترة أسبوعية)</li>
                      <li>X-Host Spark (فترة فوترة شهرية)</li>
                      <li>X-Host Core (فترة فوترة شهرية)</li>
                      <li>X-Host Rise (فترة فوترة شهرية)</li>
                      <li>X-Host Drive (فترة فوترة شهرية)</li>
                      <li>X-Host Boost (فترة فوترة شهرية)</li>
                      <li>X-Host Scale (فترة فوترة شهرية)</li>
                      <li>X-Host Power (فترة فوترة شهرية)</li>
                      <li>X-Host Elite (فترة فوترة شهرية)</li>
                      <li>X-Host Titan (فترة فوترة شهرية)</li>
                      <li>X-Host Apex (فترة فوترة شهرية)</li>
                      <li>X-Host Infinity (فترة فوترة شهرية)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-accent mb-2">أنواع السيرفرات:</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                      <li>Dev Stack</li>
                      <li>Web Server</li>
                      <li>Virtual Machines - VPS</li>
                      <li>VPS - SSH</li>
                      <li>Remote Desktop - RDP</li>
                      <li>Bot WhatsApp EN</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-accent mb-2">أنظمة التشغيل المدعومة:</h3>
                    <p className="text-muted-foreground text-sm">
                      Linux (بجميع أنواعه) و Windows وأنظمة التشغيل الأخرى المتاحة حسب الخدمة المختارة.
                    </p>
                  </div>
                </div>
                <p className="text-foreground pt-4">
                  تستثنى من هذه السياسة أي خدمات استثنائية أو عقود خاصة لم تتم الموافقة عليها كتابةً من قبل إدارة X-Host.
                </p>
              </div>
            )}
          </section>

          {/* Section 2 */}
          <section
            id="definitions"
            className="border border-border rounded-lg overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => toggleSection("definitions")}
              className="w-full p-6 flex items-center justify-between bg-secondary/40 hover:bg-secondary/60 transition-colors"
            >
              <h2 className="text-xl font-bold text-left">2. التعريفات المهمة</h2>
              <ChevronDown
                className={`w-6 h-6 transition-transform ${expandedSections["definitions"] ? "rotate-180" : ""}`}
              />
            </button>
            {expandedSections["definitions"] && (
              <div className="p-6 bg-background/50 border-t border-border space-y-4">
                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold text-accent">العميل:</h3>
                    <p className="text-foreground text-sm">الشخص الطبيعي أو الاعتباري الذي يشترك في خدمات X-Host.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-accent">الخدمة:</h3>
                    <p className="text-foreground text-sm">
                      السيرفر أو الخطة المستأجرة من X-Host بموجب العقد بين الطرفين.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-accent">فترة الضمان (Grace Period):</h3>
                    <p className="text-foreground text-sm">
                      المدة الزمنية المسموحة للعميل لطلب استرجاع المبلغ دون الاستفادة الفعلية من الخدمة.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-accent">الرصيد (Balance):</h3>
                    <p className="text-foreground text-sm">المبالغ المالية المشحونة في محفظة حسابك على X-Host.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-accent">الفاتورة (Invoice):</h3>
                    <p className="text-foreground text-sm">الوثيقة الرسمية الصادرة عن X-Host تفصيل الخدمة والرسوم.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-accent">الاستخدام الفعلي (Actual Usage):</h3>
                    <p className="text-foreground text-sm">أي استهلاك ملموس للموارد أو الخدمات خلال فترة الاشتراك.</p>
                  </div>
                </div>
              </div>
            )}
          </section>

          {/* Section 3 */}
          <section
            id="eligibility"
            className="border border-border rounded-lg overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => toggleSection("eligibility")}
              className="w-full p-6 flex items-center justify-between bg-secondary/40 hover:bg-secondary/60 transition-colors"
            >
              <h2 className="text-xl font-bold text-left">3. أهلية الاسترجاع والشروط</h2>
              <ChevronDown
                className={`w-6 h-6 transition-transform ${expandedSections["eligibility"] ? "rotate-180" : ""}`}
              />
            </button>
            {expandedSections["eligibility"] && (
              <div className="p-6 bg-background/50 border-t border-border space-y-4">
                <div className="space-y-4">
                  <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
                    <h3 className="font-semibold text-accent mb-2">✓ استرجاع كامل (Full Refund):</h3>
                    <ul className="space-y-2 text-foreground text-sm">
                      <li>
                        • إذا فشل تفعيل السيرفر أو تعذر تقديم الخدمة بسبب خطأ تقني من جانب X-Host أو عطل في البنية
                        التحتية.
                      </li>
                      <li>• في حالة عدم توفر الموارد أو المواصفات المطلوبة حسب الخطة المشتراة.</li>
                      <li>• إذا لم يتم تفعيل الخدمة خلال 24 ساعة من وقت الدفع.</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-accent/10 border border-accent/20 rounded-lg">
                    <h3 className="font-semibold text-accent mb-2">⏰ المهل الزمنية:</h3>
                    <div className="space-y-2 text-foreground text-sm">
                      <div>
                        <span className="font-semibold">خطة X-Host Free:</span>
                        <p>مهلة استرجاع 24 ساعة من وقت الدفع، بشرط عدم حدوث استهلاك مكثف للموارد.</p>
                      </div>
                      <div>
                        <span className="font-semibold">خطط شهرية (Spark إلى Infinity):</span>
                        <p>
                          مهلة تقديم طلب الاسترجاع 48 ساعة من وقت الدفع/الخصم، غير قابلة للتمديد.
                          <br />
                          <span className="text-yellow-400/70 font-semibold">
                            ملاحظة خاصة: أول عملية شراء فقط على الحساب يمكن استردادها خلال 7 أيام بشرط:
                          </span>
                        </p>
                        <ul className="mt-2 space-y-1 text-muted-foreground list-disc list-inside">
                          <li>عدم مخالفة شروط الاستخدام</li>
                          <li>عدم إساءة استخدام الموارد أو الخدمة</li>
                          <li>عدم استخدام الخدمة في أنشطة غير مصرح بها</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                    <h3 className="font-semibold text-destructive mb-2">⚠️ شروط الاسترجاع:</h3>
                    <ul className="space-y-2 text-foreground text-sm">
                      <li>• يجب تقديم طلب الاسترجاع قبل انقضاء المهلة الزمنية المحددة.</li>
                      <li>• عدم الاستفادة بشكل فعلي من الخدمة أو استخدام موارد كبيرة منها.</li>
                      <li>• عدم تنفيذ أي عمليات حساسة أو إنشاء بيانات حرجة على الخدمة قبل طلب الاسترجاع.</li>
                      <li>• الالتزام بجميع شروط الاستخدام الخاصة بـ X-Host.</li>
                      <li>• عدم وجود أي مخالفات أمنية أو انتهاكات لسياسات الاستخدام.</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </section>

          {/* Section 4 */}
          <section
            id="prorated"
            className="border border-border rounded-lg overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => toggleSection("prorated")}
              className="w-full p-6 flex items-center justify-between bg-secondary/40 hover:bg-secondary/60 transition-colors"
            >
              <h2 className="text-xl font-bold text-left">4. الاسترجاع الجزئي والرصيد (Pro-Rated)</h2>
              <ChevronDown
                className={`w-6 h-6 transition-transform ${expandedSections["prorated"] ? "rotate-180" : ""}`}
              />
            </button>
            {expandedSections["prorated"] && (
              <div className="p-6 bg-background/50 border-t border-border space-y-4">
                <p className="text-foreground">
                  في الحالات التي يكون فيها الاسترجاع كاملاً غير ممكن بسبب الاستخدام الجزئي للخدمة:
                </p>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold text-accent mb-2">التحويل لرصيد الحساب:</h3>
                    <p className="text-foreground text-sm">
                      يمكن تحويل المبلغ المستحق للاسترجاع إلى رصيد (Credit) في محفظة الحساب بدلاً من استرجاعه مباشرة،
                      وذلك بناءً على اختيار العميل أو توصية الفريق الداعم.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-accent mb-2">حساب الاسترجاع الجزئي:</h3>
                    <p className="text-foreground text-sm">
                      يتم حساب المبلغ المسترجع بناءً على عدد الساعات/الأيام المتبقية من فترة الاشتراك. تُطرح رسوم بوابة
                      الدفع (إن وجدت) من المبلغ المسترجع.
                    </p>
                  </div>
                  <div className="p-3 bg-secondary/30 border border-border rounded">
                    <p className="text-muted-foreground text-sm font-mono">
                      الحساب: (عدد الأيام المتبقية / إجمالي أيام الفترة) × المبلغ المدفوع
                    </p>
                  </div>
                </div>
              </div>
            )}
          </section>

          {/* Section 5 */}
          <section
            id="non-refundable"
            className="border border-border rounded-lg overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => toggleSection("non-refundable")}
              className="w-full p-6 flex items-center justify-between bg-secondary/40 hover:bg-secondary/60 transition-colors"
            >
              <h2 className="text-xl font-bold text-left">5. البنود غير القابلة للاسترجاع</h2>
              <ChevronDown
                className={`w-6 h-6 transition-transform ${expandedSections["non-refundable"] ? "rotate-180" : ""}`}
              />
            </button>
            {expandedSections["non-refundable"] && (
              <div className="p-6 bg-background/50 border-t border-border space-y-4">
                <p className="text-foreground mb-4">البنود التالية غير قابلة للاسترجاع بأي حال من الأحوال:</p>
                <div className="space-y-3">
                  <div className="p-3 bg-destructive/10 border border-destructive/20 rounded">
                    <h3 className="font-semibold text-destructive mb-1">1. رسوم البوابات والعمولات:</h3>
                    <p className="text-foreground text-sm">
                      جميع رسوم بوابات الدفع، رسوم المعالجة البنكية، ورسوم العملات الأجنبية (إن كانت غير قابلة للاسترجاع
                      من مزود الدفع).
                    </p>
                  </div>
                  <div className="p-3 bg-destructive/10 border border-destructive/20 rounded">
                    <h3 className="font-semibold text-destructive mb-1">2. التراخيص والخدمات الإضافية:</h3>
                    <p className="text-foreground text-sm">
                      أي تراخيص طرف ثالث، بما فيها أنظمة Windows داخل RDP، وتراخيص البرامج المثبتة، وأي إضافات أو خدمات
                      تم تفعيلها خصيصاً للعميل.
                    </p>
                  </div>
                  <div className="p-3 bg-destructive/10 border border-destructive/20 rounded">
                    <h3 className="font-semibold text-destructive mb-1">3. الخدمات المستخدمة فعلياً:</h3>
                    <p className="text-foreground text-sm">
                      أي مبلغ يتعلق بخدمة تم استخدامها بشكل فعلي أو استهلاك موارد كبيرة (نطاق ترددي، معالجة، تخزين).
                    </p>
                  </div>
                  <div className="p-3 bg-destructive/10 border border-destructive/20 rounded">
                    <h3 className="font-semibold text-destructive mb-1">4. إساءة الاستخدام والمخالفات:</h3>
                    <p className="text-foreground text-sm">
                      أي مدفوعات مرتبطة بخدمات لم تُستخدم في أنشطة مصرح بها، أو استخدمت في أغراض غير قانونية أو تعدين
                      العملات الرقمية أو شن هجمات أو غيرها.
                    </p>
                  </div>
                  <div className="p-3 bg-destructive/10 border border-destructive/20 rounded">
                    <h3 className="font-semibold text-destructive mb-1">5. الخدمات المُلغاة بناءً على انتهاك السياسة:</h3>
                    <p className="text-foreground text-sm">
                      أي خدمة تم إيقافها بسبب انتهاك سياسة الاستخدام أو الشروط والأحكام.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </section>

          {/* Section 6 */}
          <section id="wallet" className="border border-border rounded-lg overflow-hidden transition-all duration-300">
            <button
              onClick={() => toggleSection("wallet")}
              className="w-full p-6 flex items-center justify-between bg-secondary/40 hover:bg-secondary/60 transition-colors"
            >
              <h2 className="text-xl font-bold text-left">6. سياسة الرصيد والمحفظة (Wallet)</h2>
              <ChevronDown
                className={`w-6 h-6 transition-transform ${expandedSections["wallet"] ? "rotate-180" : ""}`}
              />
            </button>
            {expandedSections["wallet"] && (
              <div className="p-6 bg-background/50 border-t border-border space-y-4">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-accent mb-2">شحن الرصيد:</h3>
                    <p className="text-foreground text-sm">
                      عند شحن رصيد في محفظة الحساب، يمكن استسترجاع المبلغ الكامل إذا كان غير مستخدم خلال 7 أيام من تاريخ
                      الشحن.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-accent mb-2">الرصيد المستخدم جزئياً:</h3>
                    <p className="text-foreground text-sm">
                      إذا تم استخدام جزء من الرصيد المشحون، يتم رد المبلغ غير المستخدم فقط، مع خصم رسوم بوابة الدفع (إن
                      وجدت).
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-accent mb-2">انتهاء صلاحية الرصيد:</h3>
                    <p className="text-foreground text-sm">
                      الرصيد المشحون يبقى ساري المفعول طالما الحساب نشط. لا يوجد تاريخ انتهاء صراحة للرصيد، لكن في حالة
                      إغلاق الحساب، يتم معالجة استرجاع الرصيد حسب شروط الإغلاق.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </section>

          {/* Section 7 */}
          <section
            id="rejection"
            className="border border-border rounded-lg overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => toggleSection("rejection")}
              className="w-full p-6 flex items-center justify-between bg-secondary/40 hover:bg-secondary/60 transition-colors"
            >
              <h2 className="text-xl font-bold text-left">7. حالات رفض الاسترجاع</h2>
              <ChevronDown
                className={`w-6 h-6 transition-transform ${expandedSections["rejection"] ? "rotate-180" : ""}`}
              />
            </button>
            {expandedSections["rejection"] && (
              <div className="p-6 bg-background/50 border-t border-border space-y-4">
                <p className="text-foreground mb-4">يتم رفض طلب الاسترجاع تلقائياً في الحالات التالية:</p>
                <div className="space-y-2">
                  <div className="flex gap-3 items-start">
                    <span className="text-destructive font-bold">✗</span>
                    <div>
                      <p className="font-semibold text-foreground">استخدام الخدمة في أنشطة Spam أو البريد العشوائي</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="text-destructive font-bold">✗</span>
                    <div>
                      <p className="font-semibold text-foreground">
                        استخدام الخدمة في تعدين العملات الرقمية بدون ترخيص
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="text-destructive font-bold">✗</span>
                    <div>
                      <p className="font-semibold text-foreground">شن هجمات سيبرانية أو اختراقات أو أي نشاط تخريبي</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="text-destructive font-bold">✗</span>
                    <div>
                      <p className="font-semibold text-foreground">استضافة محتوى غير قانوني أو محظور</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="text-destructive font-bold">✗</span>
                    <div>
                      <p className="font-semibold text-foreground">الاحتيال أو محاولة الحصول على خدمات بطرق مخادعة</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="text-destructive font-bold">✗</span>
                    <div>
                      <p className="font-semibold text-foreground">
                        تقديم Chargeback أو نزاع بنكي بدون التواصل مع فريق الدعم أولاً
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="text-destructive font-bold">✗</span>
                    <div>
                      <p className="font-semibold text-foreground">تقديم طلب استرجاع بعد انتهاء فترة الضمان المحددة</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </section>

          {/* Section 8 */}
          <section id="process" className="border border-border rounded-lg overflow-hidden transition-all duration-300">
            <button
              onClick={() => toggleSection("process")}
              className="w-full p-6 flex items-center justify-between bg-secondary/40 hover:bg-secondary/60 transition-colors"
            >
              <h2 className="text-xl font-bold text-left">8. عملية طلب الاسترجاع</h2>
              <ChevronDown
                className={`w-6 h-6 transition-transform ${expandedSections["process"] ? "rotate-180" : ""}`}
              />
            </button>
            {expandedSections["process"] && (
              <div className="p-6 bg-background/50 border-t border-border space-y-4">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-accent mb-2">طرق التقديم:</h3>
                    <ul className="space-y-2 text-foreground text-sm">
                      <li>✓ تقديم تذكرة عبر نظام الدعم الرسمي على لوحة التحكم</li>
                      <li>✓ إرسال بريد إلى البريد الرسمي: support@x-host.site</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-accent mb-2">البيانات المطلوبة في الطلب:</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                      <li>رقم الفاتورة أو رقم المعاملة (Invoice Number)</li>
                      <li>اسم الخدمة أو السيرفر المراد استرجاع مبلغها</li>
                      <li>سبب الطلب بشكل واضح وموجز</li>
                      <li>تاريخ وقت الشراء/الدفع</li>
                      <li>أي صور أو لقطات شاشة توضح المشكلة (اختياري)</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-secondary/30 border border-border rounded">
                    <p className="text-foreground text-sm">
                      <span className="font-semibold">ملاحظة مهمة:</span> يجب تقديم الطلب بحسن نية وليس بقصد الاستغلال.
                      طلبات الاسترجاع المتكررة أو المشبوهة قد تؤدي لإيقاف الحساب.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </section>

          {/* Section 9 */}
          <section
            id="timeline"
            className="border border-border rounded-lg overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => toggleSection("timeline")}
              className="w-full p-6 flex items-center justify-between bg-secondary/40 hover:bg-secondary/60 transition-colors"
            >
              <h2 className="text-xl font-bold text-left">9. مدة المعالجة والإرجاع</h2>
              <ChevronDown
                className={`w-6 h-6 transition-transform ${expandedSections["timeline"] ? "rotate-180" : ""}`}
              />
            </button>
            {expandedSections["timeline"] && (
              <div className="p-6 bg-background/50 border-t border-border space-y-4">
                <div className="space-y-3">
                  <div className="p-3 bg-secondary/30 border border-border rounded">
                    <p className="font-semibold text-accent mb-1">مراجعة الطلب:</p>
                    <p className="text-foreground text-sm">1 إلى 3 أيام عمل</p>
                    <p className="text-muted-foreground text-xs mt-1">
                      يتم خلالها التحقق من أهلية الطلب ومراجعة جميع الشروط.
                    </p>
                  </div>
                  <div className="p-3 bg-secondary/30 border border-border rounded">
                    <p className="font-semibold text-accent mb-1">معالجة الاسترجاع:</p>
                    <p className="text-foreground text-sm">5 إلى 15 يوم عمل</p>
                    <p className="text-muted-foreground text-xs mt-1">
                      المدة اللازمة لظهور المبلغ في حسابك البنكي (حسب البنك ودولة الإقامة).
                    </p>
                  </div>
                  <div className="p-4 bg-accent/10 border border-accent/20 rounded-lg">
                    <h3 className="font-semibold text-accent mb-2">⚠️ ملاحظات مهمة:</h3>
                    <ul className="space-y-1 text-foreground text-sm">
                      <li>• المدد المذكورة هي تقديرية وقد تختلف حسب موقع البنك والخدمات المصرفية.</li>
                      <li>• في بعض الحالات النادرة، قد تستغرق المدة وقتاً أطول.</li>
                      <li>• سيتم إخطار العميل بحالة الطلب عبر البريد الإلكتروني.</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </section>

          {/* Section 10 */}
          <section id="contact" className="border border-border rounded-lg overflow-hidden transition-all duration-300">
            <button
              onClick={() => toggleSection("contact")}
              className="w-full p-6 flex items-center justify-between bg-secondary/40 hover:bg-secondary/60 transition-colors"
            >
              <h2 className="text-xl font-bold text-left">10. بيانات التواصل والدعم</h2>
              <ChevronDown
                className={`w-6 h-6 transition-transform ${expandedSections["contact"] ? "rotate-180" : ""}`}
              />
            </button>
            {expandedSections["contact"] && (
              <div className="p-6 bg-background/50 border-t border-border space-y-4">
                <div className="space-y-3">
                  <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
                    <p className="font-semibold text-accent mb-1">البريد الإلكتروني الرسمي:</p>
                    <p className="text-foreground font-mono text-sm">support@x-host.site</p>
                  </div>
                  <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
                    <p className="font-semibold text-accent mb-1">نظام تقديم التذاكر:</p>
                    <p className="text-foreground text-sm">متاح عبر لوحة التحكم الخاصة بك على X-Host</p>
                  </div>
                  <div>
                    <p className="font-semibold text-accent mb-2">طرق التواصل الموصى بها:</p>
                    <ol className="space-y-1 text-foreground text-sm list-decimal list-inside">
                      <li>تقديم تذكرة دعم عبر لوحة التحكم (الطريقة الأسرع)</li>
                      <li>إرسال بريد إلى البريد الرسمي مع شرح تفصيلي</li>
                      <li>التواصل عبر قنوات التواصل الأخرى إن وجدت</li>
                    </ol>
                  </div>
                </div>
              </div>
            )}
          </section>
        </div>

        {/* Additional Terms */}
        <div className="mt-12 p-6 bg-secondary/30 border border-border rounded-lg space-y-4">
          <h2 className="text-xl font-bold">11. بنود عامة مهمة</h2>
          <div className="space-y-3 text-foreground text-sm">
            <div>
              <p className="font-semibold text-accent mb-1">طبيعة الخدمة الرقمية:</p>
              <p>
                خدمات X-Host رقمية بطبيعتها، وتخصيص الموارد والتفعيل يتم بشكل فوري عند استكمال عملية الدفع. لذا فإن أي
                استخدام (حتى ولو بسيط) يعتبر استفادة من الخدمة.
              </p>
            </div>
            <div>
              <p className="font-semibold text-accent mb-1">تعديل السياسة:</p>
              <p>
                يحق لـ X-Host تعديل هذه السياسة في أي وقت بدون إشعار مسبق. ستكون النسخة الأخيرة من السياسة هي النافذة.
                يوصى بمراجعة هذه السياسة بشكل دوري.
              </p>
            </div>
            <div>
              <p className="font-semibold text-accent mb-1">القانون الواجب التطبيق:</p>
              <p>
                تخضع هذه السياسة لأحكام القوانين السارية. أي نزاع ينشأ عن تطبيق هذه السياسة يتم حله من خلال التواصل
                الودي أولاً.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm mb-4">آخر تحديث لهذه السياسة: 11 يناير 2026</p>
          <div className="flex flex-col gap-2 text-sm">
            <p className="text-foreground">للاستفسارات والدعم، يرجى التواصل معنا:</p>
            <a href="mailto:support@x-host.site" className="text-primary hover:underline font-semibold">
              support@x-host.site
            </a>
          </div>
          <p className="text-xs text-muted-foreground mt-6">© 2026 X-Host. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </main>
  )
}
