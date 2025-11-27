# StillWell - Testing Documentation

## 🧪 Testing Status: November 27, 2025

---

## 1. Cross-Browser Testing

### ✅ Browsers to Test:
- [ ] **Google Chrome** (Latest version)
  - [ ] Desktop Windows
  - [ ] Desktop macOS
  - [ ] Desktop Linux
- [ ] **Mozilla Firefox** (Latest version)
  - [ ] Desktop Windows
  - [ ] Desktop macOS
- [ ] **Safari** (Latest version)
  - [ ] Desktop macOS
  - [ ] iOS (iPhone/iPad)
- [ ] **Microsoft Edge** (Latest version)
  - [ ] Desktop Windows
- [ ] **Opera** (Optional)
- [ ] **Brave** (Optional)

### Test Checklist for Each Browser:
- [ ] Homepage loads correctly
- [ ] All pages accessible via navigation
- [ ] Language switcher works (EN ↔ RU)
- [ ] Typing animations display properly
- [ ] Images and icons load
- [ ] Fonts render correctly
- [ ] Colors match design (cream, sage, terracotta)
- [ ] Hover effects work on buttons/links
- [ ] Footer displays correctly
- [ ] No console errors

### Known Browser-Specific Issues:
- **Safari**: May need `-webkit-` prefixes for some animations
- **Firefox**: Check typing animation cursor blink
- **Edge**: Verify smooth scrolling behavior

---

## 2. Mobile Device Testing

### ✅ Devices to Test:

#### iOS Devices:
- [ ] **iPhone 14/15** (iOS 17+)
- [ ] **iPhone SE** (smaller screen)
- [ ] **iPad** (tablet view)
- [ ] **iPad Mini** (smaller tablet)

#### Android Devices:
- [ ] **Samsung Galaxy S23/S24**
- [ ] **Google Pixel 7/8**
- [ ] **OnePlus** (any recent model)
- [ ] **Xiaomi** (popular in Russia)

### Mobile Test Checklist:
- [ ] Responsive layout works on all screen sizes
- [ ] Touch targets are large enough (min 44x44px)
- [ ] Navigation menu accessible
- [ ] Language switcher works on mobile
- [ ] Typing animations perform smoothly
- [ ] WhatsApp links open WhatsApp app
- [ ] Phone number links work (tel: protocol)
- [ ] Text is readable without zooming
- [ ] No horizontal scrolling
- [ ] Footer is accessible
- [ ] Forms are usable (if any added later)

### Screen Sizes to Test:
- [ ] 320px (iPhone SE)
- [ ] 375px (iPhone 12/13)
- [ ] 390px (iPhone 14/15)
- [ ] 414px (iPhone Plus models)
- [ ] 768px (iPad portrait)
- [ ] 1024px (iPad landscape)
- [ ] 1280px (Desktop)
- [ ] 1920px (Large desktop)

---

## 3. Forms and CTAs Testing

### ✅ Call-to-Action Buttons:

#### Homepage:
- [ ] "Start Your Journey" button → Links to /start-journey
- [ ] "View Lessons" button → Links to /view-lessons
- [ ] Hover animations work
- [ ] Typing animations below buttons work

#### Start Journey Page:
- [ ] "Contact Teacher on WhatsApp" button works
- [ ] Opens WhatsApp with pre-filled message
- [ ] Message is in correct language (EN/RU)
- [ ] Phone number is correct (+79145251745)
- [ ] Teacher name displays correctly

#### View Lessons Page:
- [ ] "Message Ksenia on WhatsApp" button works
- [ ] Opens WhatsApp correctly
- [ ] All lesson option cards are clickable
- [ ] Hover effects work on cards

#### About Page:
- [ ] "Start Your Journey" CTA button works
- [ ] Links to correct page

#### Lessons Page:
- [ ] "Book Your First Lesson" button works
- [ ] Links to /start-journey

#### Footer Links (All Pages):
- [ ] Privacy Policy link → /privacy
- [ ] Terms of Service link → /terms
- [ ] Both pages load correctly

### WhatsApp Link Testing:
```
Expected format: https://wa.me/79145251745?text=[encoded message]

English message: "Hello! I'm interested in personal English lessons with StillWell. Can we discuss the details?"

Russian message: "Здравствуйте! Меня интересуют персональные уроки английского с StillWell. Можем обсудить детали?"
```

#### Test on:
- [ ] Desktop (opens WhatsApp Web)
- [ ] Mobile (opens WhatsApp app)
- [ ] Tablet (opens WhatsApp app)

---

## 4. Language Switching Testing

### ✅ Language Switcher:

#### Test on Each Page:
- [ ] **Homepage** (/)
  - [ ] Switch EN → RU: All text translates
  - [ ] Switch RU → EN: All text translates
  - [ ] Typing animations translate
  - [ ] Button text translates
  - [ ] Footer translates
  
- [ ] **About Page** (/about)
  - [ ] All sections translate
  - [ ] Teacher bio translates
  - [ ] Quote translates
  - [ ] Values section translates
  
- [ ] **Lessons Page** (/lessons)
  - [ ] Level descriptions translate
  - [ ] Lesson formats translate
  - [ ] How it works section translates
  
- [ ] **View Lessons Page** (/view-lessons)
  - [ ] All highlights translate
  - [ ] Lesson options translate
  - [ ] Testimonials translate
  - [ ] Student names translate (Anna→Анна, etc.)
  
- [ ] **Start Journey Page** (/start-journey)
  - [ ] Steps translate
  - [ ] Benefits translate
  - [ ] CTA section translates
  - [ ] WhatsApp message changes language
  
- [ ] **Privacy Page** (/privacy)
  - [ ] All sections translate
  
- [ ] **Terms Page** (/terms)
  - [ ] All sections translate

### Language Persistence Testing:
- [ ] Select Russian on homepage
- [ ] Navigate to About → Still Russian
- [ ] Navigate to Lessons → Still Russian
- [ ] Refresh page → Still Russian
- [ ] Close browser, reopen → Still Russian (localStorage)
- [ ] Switch to English → All pages update
- [ ] Test on mobile devices

### Translation Quality Check:
- [ ] No English text visible when Russian selected
- [ ] No Russian text visible when English selected
- [ ] No broken translations (undefined, null)
- [ ] Grammar is correct in both languages
- [ ] Tone is consistent (calm, premium, respectful)

---

## 5. WhatsApp Links on Mobile

### ✅ Mobile-Specific WhatsApp Testing:

#### iOS Testing:
- [ ] Tap WhatsApp button on iPhone
- [ ] WhatsApp app opens (if installed)
- [ ] Pre-filled message appears correctly
- [ ] Message is in correct language
- [ ] Phone number is correct
- [ ] Can send message successfully
- [ ] If WhatsApp not installed, shows app store

#### Android Testing:
- [ ] Tap WhatsApp button on Android
- [ ] WhatsApp app opens (if installed)
- [ ] Pre-filled message appears correctly
- [ ] Message is in correct language
- [ ] Phone number is correct
- [ ] Can send message successfully
- [ ] If WhatsApp not installed, shows Play Store

#### Desktop Testing:
- [ ] Click WhatsApp button on desktop
- [ ] Opens WhatsApp Web (web.whatsapp.com)
- [ ] Pre-filled message appears
- [ ] Can scan QR code and send message

### Test Different Scenarios:
- [ ] WhatsApp installed → Opens app
- [ ] WhatsApp not installed → Redirects to store
- [ ] WhatsApp Web → Opens in browser
- [ ] Multiple WhatsApp accounts → Allows selection

---

## 6. Load Testing

### ✅ Performance Metrics:

#### Target Metrics:
- **First Contentful Paint (FCP)**: < 1.8s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Time to Interactive (TTI)**: < 3.8s
- **Total Blocking Time (TBT)**: < 200ms
- **Cumulative Layout Shift (CLS)**: < 0.1

#### Tools to Use:
- [ ] **Google PageSpeed Insights**
  - [ ] Test homepage
  - [ ] Test about page
  - [ ] Test lessons page
  - [ ] Aim for 90+ score on mobile
  - [ ] Aim for 95+ score on desktop

- [ ] **Lighthouse** (Chrome DevTools)
  - [ ] Performance score
  - [ ] Accessibility score
  - [ ] Best Practices score
  - [ ] SEO score

- [ ] **WebPageTest**
  - [ ] Test from multiple locations
  - [ ] Test on 3G/4G connections
  - [ ] Check waterfall chart

- [ ] **GTmetrix**
  - [ ] Overall performance grade
  - [ ] Structure score
  - [ ] LCP, TBT, CLS metrics

### Load Testing Scenarios:

#### Single User:
- [ ] Load homepage
- [ ] Navigate through all pages
- [ ] Switch languages multiple times
- [ ] Click all CTAs
- [ ] Measure total load time

#### Multiple Users (Simulated):
- [ ] 10 concurrent users
- [ ] 50 concurrent users
- [ ] 100 concurrent users
- [ ] Check server response times
- [ ] Monitor for errors

#### Stress Testing:
- [ ] Rapid page navigation
- [ ] Rapid language switching
- [ ] Multiple WhatsApp link clicks
- [ ] Check for memory leaks
- [ ] Monitor browser console

### Network Conditions:
- [ ] Fast 3G (750ms RTT)
- [ ] Slow 3G (2000ms RTT)
- [ ] 4G (170ms RTT)
- [ ] WiFi (typical)
- [ ] Offline (should show error gracefully)

---

## 7. Accessibility Testing

### ✅ A11y Checklist:

#### Keyboard Navigation:
- [ ] Tab through all interactive elements
- [ ] Enter/Space activates buttons
- [ ] Escape closes modals (if any)
- [ ] Focus indicators visible
- [ ] Logical tab order

#### Screen Reader Testing:
- [ ] Test with NVDA (Windows)
- [ ] Test with JAWS (Windows)
- [ ] Test with VoiceOver (macOS/iOS)
- [ ] All images have alt text
- [ ] Headings are properly structured
- [ ] Links are descriptive

#### Color Contrast:
- [ ] Text on cream background: Pass
- [ ] Sage green on cream: Pass
- [ ] Terracotta on cream: Pass
- [ ] White text on charcoal: Pass
- [ ] Use WebAIM Contrast Checker

#### Tools:
- [ ] WAVE Browser Extension
- [ ] axe DevTools
- [ ] Lighthouse Accessibility Audit

---

## 8. SEO Testing

### ✅ SEO Validation:

- [ ] **Google Rich Results Test**
  - [ ] Test structured data
  - [ ] Verify EducationalOrganization schema
  
- [ ] **Google Mobile-Friendly Test**
  - [ ] All pages pass
  
- [ ] **Meta Tags Validator**
  - [ ] Check Open Graph tags
  - [ ] Check Twitter Cards
  
- [ ] **Social Media Debuggers**
  - [ ] Facebook Sharing Debugger
  - [ ] Twitter Card Validator
  - [ ] LinkedIn Post Inspector

---

## 9. Security Testing

### ✅ Security Checklist:

- [ ] HTTPS enabled (after deployment)
- [ ] No mixed content warnings
- [ ] No exposed API keys
- [ ] No sensitive data in console
- [ ] XSS protection enabled
- [ ] CSRF protection (if forms added)
- [ ] Security headers present

---

## 10. Regression Testing

### ✅ After Each Update:

- [ ] All pages still load
- [ ] Language switching still works
- [ ] WhatsApp links still work
- [ ] No new console errors
- [ ] Performance hasn't degraded
- [ ] SEO tags still present

---

## 📊 Test Results Template

### Browser: [Browser Name]
**Date**: [Date]
**Tester**: [Name]
**Status**: ✅ Pass / ⚠️ Issues / ❌ Fail

**Issues Found**:
1. [Description]
2. [Description]

**Screenshots**: [Attach if needed]

---

## 🐛 Bug Report Template

**Title**: [Brief description]
**Severity**: Critical / High / Medium / Low
**Browser/Device**: [Details]
**Steps to Reproduce**:
1. Step 1
2. Step 2
3. Step 3

**Expected Result**: [What should happen]
**Actual Result**: [What actually happens]
**Screenshots**: [Attach]

---

## ✅ Testing Sign-Off

### Pre-Launch Checklist:
- [ ] All critical bugs fixed
- [ ] All browsers tested
- [ ] Mobile devices tested
- [ ] Performance metrics meet targets
- [ ] Accessibility score > 90
- [ ] SEO validation passed
- [ ] Security checks passed
- [ ] Stakeholder approval received

**Tested By**: _______________
**Date**: _______________
**Approved By**: _______________
**Date**: _______________

---

**Status**: 📋 Ready for Testing
**Next Step**: Begin systematic testing across all browsers and devices
