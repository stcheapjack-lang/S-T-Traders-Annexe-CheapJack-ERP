const FLOW_STORAGE_KEY = "st_traders_5stage_erp_v1";

    const DEFAULT_FLOW_STATE = {
      saleOrders: [
        {
          id: "SOD-H/26-27/3496",
          orderRef: "ORD-11017 SRI KONDALMATHIWHITES",
          nameCode: "1077",
          date: "2026-11-17",
          client: "S T Traders Annexe Cheap Jack Musheerabad",
          address: "1-5-24, Kubera Complex, Sri Krishna Colony, Musheerabad, Hyderabad 500020",
          phone: "",
          gstin: "36ACQPM0669R1ZM",
          gender: "UNISEX",
          style: "BED SHEETS ROYAL BLUE PLAIN",
          sizes: { "34": 0, "36": 0, "38": 100, "40": 0, "42": 0, "44": 0 },
          totalQty: 100,
          rate: 275,
          gstPct: 5,
          remarks: "",
          cloth: "144 TC Polycotton",
          colour: "Royal Blue",
          collar: "Standard Hem",
          pattern: "60x90 Inch Flat Bedsheet with 1-Inch Double Stitch",
          bottomPattern: "Pillow Cover Included",
          piping: "Self Piping",
          embrDesign: "Standard Woven Label",
          poCode: "STTNP-06",
          hospt: "S T Traders Cheap Jack Musheerabad",
          stage: "New Sale Order"
        },
        {
          id: "AM-H/26-27/2716",
          orderRef: "ORD-11015 YASHODA NURSING",
          nameCode: "1077",
          date: "2026-11-11",
          client: "Yashoda & Apollo Nursing Wing (Hyd)",
          address: "SP Road, Secunderabad, Hyderabad 500003, Telangana",
          phone: "9849022110",
          gstin: "36AAACY4912K1Z2",
          gender: "FEMALE",
          style: "NURSE PANT SHIRT",
          sizes: { "34": 4, "36": 4, "38": 6, "40": 0, "42": 0, "44": 0 },
          totalQty: 14,
          rate: 720,
          gstPct: 5,
          remarks: "Urgent Nursing Batch",
          cloth: "Alaskar",
          colour: "White",
          collar: "Yashoda Collar",
          pattern: "3 Tucks Shirt Pattern Down 2 Pocket Front Open Buttons",
          bottomPattern: "Nada Phyajam",
          piping: "Matching White Piping",
          embrDesign: "LOGO on CHEST (Core Magnues) Rama - Neat Logo Should Come",
          poCode: "STTNP-06",
          hospt: "S T Traders Cheap Jack Musheerabad",
          stage: "Cutting Slip Generated"
        },
        {
          id: "AM-H/26-27/2718",
          orderRef: "ORD-11016 KIMS SCRUBS",
          nameCode: "1082",
          date: "2026-11-19",
          client: "KIMS Hospitals Secunderabad",
          address: "1-8-31/1, Minister Road, Secunderabad, Hyderabad 500003, Telangana",
          phone: "9848033445",
          gstin: "36AAACK6219P1Z9",
          gender: "UNISEX",
          style: "CLASSIC FIT MAROON V-NECK SCRUB SET",
          sizes: { "34": 20, "36": 40, "38": 60, "40": 40, "42": 20, "44": 0 },
          totalQty: 180,
          rate: 685,
          gstPct: 5,
          remarks: "",
          cloth: "Maroon Poly-Viscose Twill",
          colour: "Maroon",
          collar: "V-Neck Scrub Collar",
          pattern: "V-Neck Top 1 Chest Pocket 2 Hip Pockets",
          bottomPattern: "Elastic Drawstring Cargo Trouser",
          piping: "Contrast Navy Piping",
          embrDesign: "KIMS Logo on Left Chest",
          poCode: "STTNP-09",
          hospt: "S T Traders Cheap Jack Musheerabad",
          stage: "New Sale Order"
        },
        {
          id: "AM-H/26-27/2719",
          orderRef: "ORD-11014 CHERLAPALLY PHARMA",
          nameCode: "1085",
          date: "2026-11-18",
          client: "Cherlapally Industrial & Pharma Corp",
          address: "Phase II, IDA Cherlapally, Hyderabad 500051, Telangana",
          phone: "9000177889",
          gstin: "36AABCC8821M1Z4",
          gender: "MALE",
          style: "PACIFICA BLUE WORKWEAR SHIRT & TROUSER",
          sizes: { "34": 0, "36": 25, "38": 50, "40": 45, "42": 20, "44": 10 },
          totalQty: 150,
          rate: 890,
          gstPct: 5,
          remarks: "",
          cloth: "Pacifica Blue Cotton Drill",
          colour: "Pacifica Blue (#1E77B4)",
          collar: "Regular Shirt Collar",
          pattern: "Full Sleeve 2 Flap Pockets Front Button Placket",
          bottomPattern: "5-Pocket Industrial Work Trouser",
          piping: "High-Vis Silver Reflective Tape",
          embrDesign: "Company Emblem on Left Pocket",
          poCode: "STTNP-11",
          hospt: "S T Traders Cheap Jack Musheerabad",
          stage: "Allocated to Tailor"
        }
      ],
      cuttingSlips: [
        {
          slipId: "CS-2716",
          soId: "AM-H/26-27/2716",
          metersIssued: 32,
          fabricReleased: false,
          status: "Ready for Tailor Allocation"
        },
        {
          slipId: "CS-2719",
          soId: "AM-H/26-27/2719",
          metersIssued: 390,
          fabricReleased: true,
          status: "Allocated to Tailor"
        }
      ],
      allocations: [
        {
          allocId: "AL-901",
          slipId: "CS-2719",
          soId: "AM-H/26-27/2719",
          unit: "Cherlapally Unit — Line B (Workwear)",
          tailor: "Kavitha Rani (Uniform Specialist)",
          totalQty: 150,
          stitchedQty: 120,
          pieceRate: 115,
          status: "In Stitching"
        }
      ],
      finishedGoods: [
        {
          fgId: "FG-501",
          allocId: "AL-900",
          soId: "AM-H/26-27/2715",
          client: "Apollo Diagnostics Hyderabad",
          gstin: "36AABCA4812M1Z5",
          style: "144 TC SOLID PURPLE BEDSHEET & PILLOW COVER SET",
          tailor: "Srinivas Rao (Bedsheet & Hemming)",
          passedQty: 200,
          reworkQty: 0,
          cartons: 5,
          rate: 440,
          date: "2026-11-18",
          invoiced: false
        }
      ],
      invoices: [
        {
          invNo: "STC/26-27/0415",
          date: "2026-11-17",
          soId: "AM-H/26-27/2710",
          client: "Care Hospitals Banjara Hills",
          gstin: "36AAACC3910L1Z1",
          style: "Maroon V-Neck Medical Scrub Set",
          hsn: "6211",
          qty: 120,
          rate: 685,
          taxable: 82200,
          gstPct: 5,
          taxAmt: 4110,
          grandTotal: 86310,
          transport: "Porter Mini-Truck TS09UB4821"
        }
      ],
      fabrics: [
        { name: "Alaskar (Clinical White)", stock: 1240, rate: 138 },
        { name: "Maroon Poly-Viscose Twill", stock: 1480, rate: 142 },
        { name: "Pacifica Blue Cotton Drill", stock: 690, rate: 168 },
        { name: "144 TC Polycotton", stock: 2150, rate: 98 }
      ],
      masterProducts: [
        {
          id: "PRD-01",
          name: "BED SHEETS ROYAL BLUE PLAIN",
          gender: "UNISEX",
          cloth: "144 TC Polycotton",
          colour: "Royal Blue",
          collar: "Standard Hem",
          pattern: "60x90 Inch Flat Bedsheet with 1-Inch Double Stitch",
          bottomPattern: "Pillow Cover Included",
          rate: 275
        },
        {
          id: "PRD-02",
          name: "NURSE PANT SHIRT (3 TUCKS)",
          gender: "FEMALE",
          cloth: "Alaskar",
          colour: "White",
          collar: "Yashoda Collar",
          pattern: "3 Tucks Shirt Pattern Down 2 Pocket Front Open Buttons",
          bottomPattern: "Nada Phyajam",
          rate: 720
        },
        {
          id: "PRD-03",
          name: "CLASSIC FIT MAROON V-NECK SCRUB SET",
          gender: "UNISEX",
          cloth: "Maroon Poly-Viscose Twill",
          colour: "Maroon",
          collar: "V-Neck Scrub Collar",
          pattern: "V-Neck Top 1 Chest Pocket 2 Hip Pockets",
          bottomPattern: "Elastic Drawstring Cargo Trouser",
          rate: 685
        },
        {
          id: "PRD-04",
          name: "PACIFICA BLUE WORKWEAR SHIRT & TROUSER",
          gender: "MALE",
          cloth: "Pacifica Blue Cotton Drill",
          colour: "Pacifica Blue (#1E77B4)",
          collar: "Regular Shirt Collar",
          pattern: "Full Sleeve 2 Flap Pockets Front Button Placket",
          bottomPattern: "5-Pocket Industrial Work Trouser",
          rate: 890
        }
      ],
      masterClients: [
        {
          id: "CLI-01",
          code: "1077",
          name: "S T Traders Annexe Cheap Jack Musheerabad",
          gstin: "36ACQPM0669R1ZM",
          category: "Retail / Wholesale Dealer",
          contact: "Musheerabad Branch • +91 93472 03651",
          city: "1-5-24, Kubera Complex, Sri Krishna Colony, Musheerabad, Hyderabad 500020"
        },
        {
          id: "CLI-02",
          code: "1080",
          name: "Yashoda & Apollo Nursing Wing (Hyd)",
          gstin: "36AAACY4912K1Z2",
          category: "Hospital & Healthcare",
          contact: "Nursing Admin • +91 98490 22110",
          city: "SP Road, Secunderabad, Hyderabad 500003"
        },
        {
          id: "CLI-03",
          code: "1082",
          name: "KIMS Hospitals Secunderabad",
          gstin: "36AAACK6219P1Z9",
          category: "Hospital & Healthcare",
          contact: "Central Stores • +91 98480 33445",
          city: "1-8-31/1, Minister Road, Secunderabad, Hyderabad 500003"
        },
        {
          id: "CLI-04",
          code: "1085",
          name: "Cherlapally Industrial & Pharma Corp",
          gstin: "36AABCC8821M1Z4",
          category: "Industrial & Pharma",
          contact: "HR & Safety • +91 90001 77889",
          city: "Phase II, IDA Cherlapally, Hyderabad 500051"
        }
      ],
      activeUserId: "USR-01",
      users: [
        {
          id: "USR-01",
          name: "admin (Proprietor)",
          login: "admin",
          pin: "0000",
          role: "Admin",
          unit: "All Units (Hyd)",
          active: true,
          rights: {
            saleOrders: true,
            cuttingSlips: true,
            allocation: true,
            receivingFg: true,
            taxInvoice: true,
            mastersReports: true,
            excelExport: true,
            manageUsers: true
          }
        },
        {
          id: "USR-02",
          name: "Mohammed Riyaz",
          login: "riyaz.cut",
          pin: "1111",
          role: "Cutting Master",
          unit: "Cherlapally Unit",
          active: true,
          rights: {
            saleOrders: false,
            cuttingSlips: true,
            allocation: true,
            receivingFg: false,
            taxInvoice: false,
            mastersReports: false,
            excelExport: false,
            manageUsers: false
          }
        },
        {
          id: "USR-03",
          name: "Kavitha Rani",
          login: "kavitha.floor",
          pin: "2222",
          role: "Floor Supervisor",
          unit: "Cherlapally Unit",
          active: true,
          rights: {
            saleOrders: false,
            cuttingSlips: true,
            allocation: true,
            receivingFg: true,
            taxInvoice: false,
            mastersReports: false,
            excelExport: false,
            manageUsers: false
          }
        },
        {
          id: "USR-04",
          name: "Srinivas Accounts",
          login: "srinivas.gst",
          pin: "3333",
          role: "Sales & Billing",
          unit: "Musheerabad Unit",
          active: true,
          rights: {
            saleOrders: true,
            cuttingSlips: false,
            allocation: false,
            receivingFg: true,
            taxInvoice: true,
            mastersReports: true,
            excelExport: true,
            manageUsers: false
          }
        }
      ]
    };

    let state = loadFlowState();
    let currentPrintableText = "";
    let activeCuttingSlipId = "";
    let trackingQuery = "";
    let trackingFilterType = "ALL";
    let activeReportTab = "ORDERS";
    let lastReportExportRows = [];
    let lastReportTitle = "MIS_Report";

    function loadFlowState() {
      try {
        const raw = localStorage.getItem(FLOW_STORAGE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          if (!Array.isArray(parsed.masterProducts)) parsed.masterProducts = JSON.parse(JSON.stringify(DEFAULT_FLOW_STATE.masterProducts));
          if (!Array.isArray(parsed.masterClients)) parsed.masterClients = JSON.parse(JSON.stringify(DEFAULT_FLOW_STATE.masterClients));
          if (!Array.isArray(parsed.users) || parsed.users.length === 0) parsed.users = JSON.parse(JSON.stringify(DEFAULT_FLOW_STATE.users));
          if (!parsed.activeUserId) parsed.activeUserId = parsed.users[0].id;
          return parsed;
        }
      } catch (e) {}
      return JSON.parse(JSON.stringify(DEFAULT_FLOW_STATE));
    }

    function saveFlowState() {
      try {
        localStorage.setItem(FLOW_STORAGE_KEY, JSON.stringify(state));
      } catch (e) {}
      renderAllSteps();
    }

    function resetDemoFlow() {
      state = JSON.parse(JSON.stringify(DEFAULT_FLOW_STATE));
      saveFlowState();
      showToast("Reset to S T Traders Annexe CheapJack 5-step demo flow.", "info");
    }

    function formatINR(n) {
      return "₹" + Number(n).toLocaleString("en-IN", { maximumFractionDigits: 0 });
    }

    function formatINR2(n) {
      return "₹" + Number(n).toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }

    function formatPlain2(n) {
      return Number(n).toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }

    // Indian Rupees Number-to-Words Converter for Sale Order / Invoice
    function numberToIndianWords(amount) {
      const num = Math.round(Number(amount) || 0);
      if (num === 0) return "Indian Rupees Zero Only";
      const ones = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten",
        "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
      const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

      const twoDigits = (n) => {
        if (n === 0) return "";
        if (n < 20) return ones[n];
        return tens[Math.floor(n / 10)] + (n % 10 ? " " + ones[n % 10] : "");
      };

      const threeDigits = (n) => {
        if (n === 0) return "";
        const h = Math.floor(n / 100);
        const rem = n % 100;
        return (h ? ones[h] + " Hundred" + (rem ? " " : "") : "") + twoDigits(rem);
      };

      let n = num;
      const parts = [];
      const crore = Math.floor(n / 10000000);
      n %= 10000000;
      const lakh = Math.floor(n / 100000);
      n %= 100000;
      const thousand = Math.floor(n / 1000);
      n %= 1000;

      if (crore) parts.push(threeDigits(crore) + " Crore");
      if (lakh) parts.push(twoDigits(lakh) + " Lakh");
      if (thousand) parts.push(twoDigits(thousand) + " Thousand");
      if (n) parts.push(threeDigits(n));

      return "Indian Rupees " + parts.join(" ") + " Only";
    }

    function showToast(msg, type = "success") {
      const box = document.getElementById("toast-container");
      const el = document.createElement("div");
      const border = type === "warning" ? "border-amber-500" : type === "info" ? "border-indigo-500" : "border-emerald-500";
      el.className = `pointer-events-auto px-4 py-3 rounded-xl bg-slate-900 text-white border-l-4 ${border} shadow-xl text-xs sm:text-sm font-medium`;
      el.textContent = msg;
      box.appendChild(el);
      setTimeout(() => el.remove(), 3200);
    }

    // Switch Active Step View
    const STEP_META = {
      "dashboard": { crumb: "Command Center", title: "Dashboard Overview" },
      "tracking": { crumb: "Search & Lifecycle", title: "Order, Cutting Slip & Invoice Tracker" },
      "masters": { crumb: "Catalog Directory", title: "Products & Clients Master" },
      "reports": { crumb: "Analytics & Export", title: "MIS Reports & Operational Filters" },
      "users": { crumb: "Security & Access", title: "Users & Role-Based Access Rights" },
      "sale-orders": { crumb: "Step 1 of 5", title: "Customer & Hospital Sale Orders" },
      "cutting-slips": { crumb: "Step 2 of 5", title: "Cutting Master Slips & Garment Preview" },
      "allocation": { crumb: "Step 3 of 5", title: "Allocation to Tailor & Production Unit" },
      "receiving-fg": { crumb: "Step 4 of 5", title: "Receiving Finished Goods (QC & Packing)" },
      "tax-invoice": { crumb: "Step 5 of 5", title: "GST Tax Invoice & E-Way Bill Dispatch" }
    };

    function toggleMobileSidebar(open) {
      // Sidebar is permanently pinned open across all viewports
    }

    function getActiveUser() {
      if (!state.users || state.users.length === 0) return DEFAULT_FLOW_STATE.users[0];
      return state.users.find(u => u.id === state.activeUserId && u.active) || state.users.find(u => u.active) || state.users[0];
    }

    function hasRight(rightKey) {
      const u = getActiveUser();
      return Boolean(u && u.rights && u.rights[rightKey]);
    }

    const STEP_RIGHT_MAP = {
      "sale-orders": "saleOrders",
      "cutting-slips": "cuttingSlips",
      "allocation": "allocation",
      "receiving-fg": "receivingFg",
      "tax-invoice": "taxInvoice",
      "masters": "mastersReports",
      "reports": "mastersReports",
      "users": "manageUsers"
    };

    function switchStep(stepId) {
      const reqRight = STEP_RIGHT_MAP[stepId];
      if (reqRight && !hasRight(reqRight)) {
        const u = getActiveUser();
        showToast(`Access Denied: ${u.name} (${u.role}) does not have permission for this module.`, "warning");
        return;
      }
      document.querySelectorAll(".step-view").forEach(v => v.classList.add("hidden"));
      const activeView = document.getElementById(`view-${stepId}`);
      if (activeView) activeView.classList.remove("hidden");

      document.querySelectorAll(".step-card").forEach((card, idx) => {
        const isCurrent = card.dataset.step === stepId;
        const badge = document.getElementById(`badge-step-${idx}`);
        if (isCurrent) {
          card.className = "step-card w-full text-left px-3 py-2.5 rounded-xl bg-indigo-600 text-white shadow-sm transition flex items-center justify-between";
          if (badge && idx >= 4) badge.className = "px-2 py-0.5 rounded-full bg-white text-indigo-700 text-xs font-extrabold";
        } else {
          card.className = "step-card w-full text-left px-3 py-2.5 rounded-xl text-slate-300 hover:bg-slate-800/80 hover:text-white transition flex items-center justify-between";
          if (badge && idx >= 4) badge.className = "px-2 py-0.5 rounded-full bg-slate-800 text-slate-200 text-xs font-extrabold";
        }
      });

      const meta = STEP_META[stepId];
      if (meta) {
        const crumbEl = document.getElementById("topbar-breadcrumb");
        const titleEl = document.getElementById("topbar-page-title");
        if (crumbEl) crumbEl.textContent = meta.crumb;
        if (titleEl) titleEl.textContent = meta.title;
      }

      toggleMobileSidebar(false);
      history.replaceState(null, "", `#${stepId}`);
      if (stepId === "tracking") renderTrackingPage();
      if (stepId === "masters") renderMastersPage();
      if (stepId === "reports") renderReportsPage();
      if (stepId === "users") renderUsersAndRights();
    }

    // =========================================================================
    // RENDER & EXPORT MIS REPORTS WITH MULTI-CRITERIA FILTERS
    // =========================================================================
    function populateReportFilterOptions() {
      const cliSel = document.getElementById("rep-filter-client");
      const tailorSel = document.getElementById("rep-filter-tailor");
      if (!cliSel || !tailorSel) return;

      const curCli = cliSel.value;
      const curTailor = tailorSel.value;

      const clients = Array.from(new Set([
        ...state.masterClients.map(c => c.name),
        ...state.saleOrders.map(o => o.client),
        ...state.invoices.map(i => i.client)
      ]));

      const tailors = Array.from(new Set(state.allocations.map(a => a.tailor)));

      cliSel.innerHTML = `<option value="ALL">All Clients & Hospitals</option>` +
        clients.map(c => `<option value="${c}">${c}</option>`).join("");
      if (clients.includes(curCli)) cliSel.value = curCli;

      tailorSel.innerHTML = `<option value="ALL">All Tailors & Masters</option>` +
        tailors.map(t => `<option value="${t}">${t}</option>`).join("");
      if (tailors.includes(curTailor)) tailorSel.value = curTailor;
    }

    function resetReportFilters() {
      document.getElementById("rep-date-from").value = "";
      document.getElementById("rep-date-to").value = "";
      document.getElementById("rep-filter-client").value = "ALL";
      document.getElementById("rep-filter-unit").value = "ALL";
      document.getElementById("rep-filter-tailor").value = "ALL";
      document.getElementById("rep-filter-stage").value = "ALL";
      renderReportsPage();
      showToast("Reset all report filters.", "info");
    }

    function switchReportTab(tabName) {
      activeReportTab = tabName;
      document.querySelectorAll(".rep-tab-btn").forEach(btn => {
        btn.className = "rep-tab-btn px-3.5 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold";
      });
      const activeBtn = document.getElementById(`rep-tab-${tabName}`);
      if (activeBtn) activeBtn.className = "rep-tab-btn px-3.5 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold";
      renderReportsPage();
    }

    function renderReportsPage() {
      populateReportFilterOptions();
      const thead = document.getElementById("rep-table-head");
      const tbody = document.getElementById("rep-table-body");
      if (!thead || !tbody) return;

      const dateFromEl = document.getElementById("rep-date-from");
      const dateToEl = document.getElementById("rep-date-to");
      const clientEl = document.getElementById("rep-filter-client");
      const unitEl = document.getElementById("rep-filter-unit");
      const tailorEl = document.getElementById("rep-filter-tailor");
      const stageEl = document.getElementById("rep-filter-stage");

      const dateFrom = dateFromEl ? dateFromEl.value : "";
      const dateTo = dateToEl ? dateToEl.value : "";
      const clientFilter = clientEl ? clientEl.value : "ALL";
      const unitFilter = unitEl ? unitEl.value : "ALL";
      const tailorFilter = tailorEl ? tailorEl.value : "ALL";
      const stageFilter = stageEl ? stageEl.value : "ALL";

      const inDateRange = (d) => {
        if (!d) return true;
        if (dateFrom && d < dateFrom) return false;
        if (dateTo && d > dateTo) return false;
        return true;
      };

      // Filtered datasets
      const filteredOrders = state.saleOrders.filter(so => {
        if (!inDateRange(so.date)) return false;
        if (clientFilter !== "ALL" && so.client !== clientFilter) return false;
        if (stageFilter !== "ALL" && so.stage !== stageFilter) return false;
        const alloc = state.allocations.find(a => a.soId === so.id);
        if (unitFilter !== "ALL" && (!alloc || !alloc.unit.includes(unitFilter))) return false;
        if (tailorFilter !== "ALL" && (!alloc || alloc.tailor !== tailorFilter)) return false;
        return true;
      });

      const filteredAllocs = state.allocations.filter(al => {
        const so = state.saleOrders.find(x => x.id === al.soId);
        if (so && !inDateRange(so.date)) return false;
        if (clientFilter !== "ALL" && (!so || so.client !== clientFilter)) return false;
        if (unitFilter !== "ALL" && !al.unit.includes(unitFilter)) return false;
        if (tailorFilter !== "ALL" && al.tailor !== tailorFilter) return false;
        return true;
      });

      const filteredInvoices = state.invoices.filter(inv => {
        if (!inDateRange(inv.date)) return false;
        if (clientFilter !== "ALL" && inv.client !== clientFilter) return false;
        return true;
      });

      // Update Summary KPIs
      const ordVal = filteredOrders.reduce((s, o) => s + (o.totalQty * o.rate), 0);
      const ordPcs = filteredOrders.reduce((s, o) => s + o.totalQty, 0);
      document.getElementById("rep-kpi-1").textContent = formatINR(ordVal);
      document.getElementById("rep-kpi-1-sub").textContent = `${filteredOrders.length} orders • ${ordPcs.toLocaleString("en-IN")} pcs`;

      const wageTotal = filteredAllocs.reduce((s, a) => s + (a.stitchedQty * a.pieceRate), 0);
      const stitchedTotal = filteredAllocs.reduce((s, a) => s + a.stitchedQty, 0);
      document.getElementById("rep-kpi-2").textContent = formatINR(wageTotal);
      document.getElementById("rep-kpi-2-sub").textContent = `${stitchedTotal.toLocaleString("en-IN")} stitched pcs logged`;

      const fabVal = state.fabrics.reduce((s, f) => s + (f.stock * f.rate), 0);
      const fabMeters = state.fabrics.reduce((s, f) => s + f.stock, 0);
      document.getElementById("rep-kpi-3").textContent = formatINR(fabVal);
      document.getElementById("rep-kpi-3-sub").textContent = `${fabMeters.toLocaleString("en-IN")} meters in warehouse`;

      const invGrand = filteredInvoices.reduce((s, i) => s + i.grandTotal, 0);
      const invTax = filteredInvoices.reduce((s, i) => s + i.taxAmt, 0);
      document.getElementById("rep-kpi-4").textContent = formatINR(invGrand);
      document.getElementById("rep-kpi-4-sub").textContent = `Includes ${formatINR(invTax)} GST tax`;

      // Render Selected Report Table
      if (activeReportTab === "ORDERS") {
        lastReportTitle = "Sale_Orders_Stage_Report";
        document.getElementById("rep-table-title").textContent = "1. Sale Orders & Stage Register";
        document.getElementById("rep-row-count").textContent = `${filteredOrders.length} orders`;
        thead.innerHTML = `
          <tr class="bg-slate-50 border-b border-slate-200 text-[11px] font-bold uppercase tracking-wider text-slate-500">
            <th class="py-3 px-4">Order ID & Date</th>
            <th class="py-3 px-4">Client / Hospital</th>
            <th class="py-3 px-4">Style & Cloth</th>
            <th class="py-3 px-4">Tailor & Unit</th>
            <th class="py-3 px-4 text-right">Qty</th>
            <th class="py-3 px-4 text-right">Amount (₹)</th>
            <th class="py-3 px-4">Stage</th>
          </tr>`;
        lastReportExportRows = [
          ["Order ID", "Date", "Client", "GSTIN", "Style", "Cloth", "Qty", "Rate", "Total Amount", "Stage"]
        ];
        tbody.innerHTML = filteredOrders.map(so => {
          const al = state.allocations.find(a => a.soId === so.id);
          const total = so.totalQty * so.rate;
          lastReportExportRows.push([so.id, so.date, `"${so.client}"`, so.gstin, `"${so.style}"`, `"${so.cloth}"`, so.totalQty, so.rate, total, so.stage]);
          return `
            <tr class="hover:bg-slate-50">
              <td class="py-3 px-4 font-bold text-slate-900">${so.id}<div class="text-[11px] font-normal text-slate-500">${so.date}</div></td>
              <td class="py-3 px-4 font-semibold text-slate-800">${so.client}</td>
              <td class="py-3 px-4">${so.style}<div class="text-[11px] text-slate-500">${so.cloth} • ${so.colour}</div></td>
              <td class="py-3 px-4 text-slate-600">${al ? `${al.tailor.split(' (')[0]} (${al.unit.split(' — ')[0]})` : 'Unassigned'}</td>
              <td class="py-3 px-4 text-right font-bold">${so.totalQty}</td>
              <td class="py-3 px-4 text-right font-extrabold text-slate-900">${formatINR(total)}</td>
              <td class="py-3 px-4"><span class="px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 font-bold text-[11px]">${so.stage}</span></td>
            </tr>`;
        }).join("") || `<tr><td colspan="7" class="py-8 text-center text-slate-400">No sale orders match the selected filters.</td></tr>`;

      } else if (activeReportTab === "TAILOR") {
        lastReportTitle = "Tailor_Piece_Rate_Wages_Report";
        document.getElementById("rep-table-title").textContent = "2. Tailor Piece-Rate Wages & Production Unit Output";
        document.getElementById("rep-row-count").textContent = `${filteredAllocs.length} allocations`;
        thead.innerHTML = `
          <tr class="bg-slate-50 border-b border-slate-200 text-[11px] font-bold uppercase tracking-wider text-slate-500">
            <th class="py-3 px-4">Tailor / Master</th>
            <th class="py-3 px-4">Production Unit</th>
            <th class="py-3 px-4">Slip & Order Ref</th>
            <th class="py-3 px-4 text-right">Target Pcs</th>
            <th class="py-3 px-4 text-right">Stitched Pcs</th>
            <th class="py-3 px-4 text-right">Piece Rate (₹)</th>
            <th class="py-3 px-4 text-right">Earned Wages (₹)</th>
          </tr>`;
        lastReportExportRows = [
          ["Tailor", "Unit", "Slip ID", "Order ID", "Target Qty", "Stitched Qty", "Piece Rate", "Earned Wages"]
        ];
        tbody.innerHTML = filteredAllocs.map(al => {
          const wages = al.stitchedQty * al.pieceRate;
          lastReportExportRows.push([`"${al.tailor}"`, `"${al.unit}"`, al.slipId, al.soId, al.totalQty, al.stitchedQty, al.pieceRate, wages]);
          return `
            <tr class="hover:bg-slate-50">
              <td class="py-3 px-4 font-bold text-slate-900">${al.tailor}</td>
              <td class="py-3 px-4 text-slate-700">${al.unit}</td>
              <td class="py-3 px-4 font-semibold text-indigo-700">${al.slipId} • ${al.soId}</td>
              <td class="py-3 px-4 text-right font-semibold">${al.totalQty}</td>
              <td class="py-3 px-4 text-right font-bold text-slate-900">${al.stitchedQty}</td>
              <td class="py-3 px-4 text-right">₹${al.pieceRate}</td>
              <td class="py-3 px-4 text-right font-extrabold text-emerald-700">${formatINR(wages)}</td>
            </tr>`;
        }).join("") || `<tr><td colspan="7" class="py-8 text-center text-slate-400">No tailor records match the selected filters.</td></tr>`;

      } else if (activeReportTab === "FABRIC") {
        lastReportTitle = "Fabric_Stock_Consumption_Report";
        document.getElementById("rep-table-title").textContent = "3. Warehouse Fabric Stock & Cutting Consumption";
        document.getElementById("rep-row-count").textContent = `${state.fabrics.length} cloth varieties`;
        thead.innerHTML = `
          <tr class="bg-slate-50 border-b border-slate-200 text-[11px] font-bold uppercase tracking-wider text-slate-500">
            <th class="py-3 px-4">Cloth Quality</th>
            <th class="py-3 px-4 text-right">Available Stock (m)</th>
            <th class="py-3 px-4 text-right">Rate / Meter (₹)</th>
            <th class="py-3 px-4 text-right">Stock Valuation (₹)</th>
            <th class="py-3 px-4">Reorder Status</th>
          </tr>`;
        lastReportExportRows = [
          ["Cloth Quality", "Available Meters", "Rate per Meter", "Stock Valuation", "Status"]
        ];
        tbody.innerHTML = state.fabrics.map(f => {
          const val = f.stock * f.rate;
          const status = f.stock < 400 ? "Low Stock — Reorder" : "Healthy Stock";
          lastReportExportRows.push([`"${f.name}"`, f.stock, f.rate, val, status]);
          return `
            <tr class="hover:bg-slate-50">
              <td class="py-3 px-4 font-bold text-slate-900">${f.name}</td>
              <td class="py-3 px-4 text-right font-extrabold text-slate-900">${f.stock} m</td>
              <td class="py-3 px-4 text-right">₹${f.rate}</td>
              <td class="py-3 px-4 text-right font-extrabold text-indigo-700">${formatINR(val)}</td>
              <td class="py-3 px-4"><span class="px-2 py-0.5 rounded-full text-[11px] font-bold ${f.stock < 400 ? 'bg-rose-50 text-rose-700' : 'bg-emerald-50 text-emerald-700'}">${status}</span></td>
            </tr>`;
        }).join("");

      } else if (activeReportTab === "GST") {
        lastReportTitle = "GSTR1_Sales_Tax_Register";
        document.getElementById("rep-table-title").textContent = "4. GST Sales & Tax Register (GSTR-1 Ready)";
        document.getElementById("rep-row-count").textContent = `${filteredInvoices.length} tax invoices`;
        thead.innerHTML = `
          <tr class="bg-slate-50 border-b border-slate-200 text-[11px] font-bold uppercase tracking-wider text-slate-500">
            <th class="py-3 px-4">Invoice No. & Date</th>
            <th class="py-3 px-4">Client & GSTIN</th>
            <th class="py-3 px-4">HSN & Qty</th>
            <th class="py-3 px-4 text-right">Taxable Value (₹)</th>
            <th class="py-3 px-4 text-right">GST Amount (₹)</th>
            <th class="py-3 px-4 text-right">Grand Total (₹)</th>
          </tr>`;
        lastReportExportRows = [
          ["Invoice No", "Date", "Client", "Buyer GSTIN", "HSN", "Qty", "Taxable Value", "GST %", "GST Amount", "Grand Total"]
        ];
        tbody.innerHTML = filteredInvoices.map(inv => {
          lastReportExportRows.push([inv.invNo, inv.date, `"${inv.client}"`, inv.gstin, inv.hsn, inv.qty, inv.taxable.toFixed(2), inv.gstPct, inv.taxAmt.toFixed(2), inv.grandTotal.toFixed(2)]);
          return `
            <tr class="hover:bg-slate-50">
              <td class="py-3 px-4 font-bold text-slate-900">${inv.invNo}<div class="text-[11px] font-normal text-slate-500">${inv.date}</div></td>
              <td class="py-3 px-4 font-semibold text-slate-800">${inv.client}<div class="text-[11px] font-mono text-slate-500">${inv.gstin}</div></td>
              <td class="py-3 px-4">HSN ${inv.hsn} • ${inv.qty} pcs</td>
              <td class="py-3 px-4 text-right font-semibold">${formatINR2(inv.taxable)}</td>
              <td class="py-3 px-4 text-right text-amber-700 font-semibold">${formatINR2(inv.taxAmt)} (${inv.gstPct}%)</td>
              <td class="py-3 px-4 text-right font-extrabold text-emerald-700">${formatINR2(inv.grandTotal)}</td>
            </tr>`;
        }).join("") || `<tr><td colspan="6" class="py-8 text-center text-slate-400">No tax invoices match the selected filters.</td></tr>`;
      }
    }

    function exportCurrentReportCsv() {
      if (!lastReportExportRows || lastReportExportRows.length <= 1) {
        showToast("No rows available to export for current filters.", "warning");
        return;
      }
      const csv = lastReportExportRows.map(r => r.join(",")).join("\n");
      const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `ST_Traders_${lastReportTitle}_${new Date().toISOString().split("T")[0]}.csv`;
      a.click();
      URL.revokeObjectURL(url);
      showToast(`Exported ${lastReportTitle}.csv for Excel.`, "success");
    }

    function printCurrentReport() {
      const title = document.getElementById("rep-table-title").textContent;
      const headHtml = document.getElementById("rep-table-head").innerHTML;
      const bodyHtml = document.getElementById("rep-table-body").innerHTML;

      document.getElementById("cutting-slip-toolbar").classList.add("hidden");
      document.getElementById("print-modal-title").textContent = `MIS Management Report — ${title}`;
      document.getElementById("print-area").innerHTML = `
        <div class="border-2 border-slate-900 p-5 space-y-4 bg-white text-slate-900">
          <div class="border-b-2 border-slate-900 pb-3 flex justify-between items-center">
            <div>
              <h2 class="text-lg font-extrabold">S T TRADERS ANNEXE CHEAPJACK</h2>
              <p class="text-xs text-slate-600">${title} • Generated on ${new Date().toLocaleDateString("en-IN")}</p>
            </div>
            <span class="px-3 py-1 bg-slate-900 text-white text-xs font-bold">MIS REPORT</span>
          </div>
          <table class="w-full text-left border-collapse border border-slate-300 text-xs">
            <thead>${headHtml}</thead>
            <tbody class="divide-y divide-slate-200">${bodyHtml}</tbody>
          </table>
        </div>
      `;
      currentPrintableText = `${title} — S T Traders Annexe CheapJack`;
      document.getElementById("print-preview-modal").classList.remove("hidden");
      document.getElementById("print-preview-modal").classList.add("flex");
    }

    // =========================================================================
    // RENDER & MANAGE PRODUCTS & CLIENTS MASTER CATALOG
    // =========================================================================
    function renderMastersPage() {
      const prodTbody = document.getElementById("master-products-tbody");
      const cliTbody = document.getElementById("master-clients-tbody");
      if (!prodTbody || !cliTbody) return;

      document.getElementById("master-prod-count").textContent = `${state.masterProducts.length} products`;
      document.getElementById("master-cli-count").textContent = `${state.masterClients.length} clients`;

      prodTbody.innerHTML = state.masterProducts.map((p, idx) => `
        <tr class="hover:bg-slate-50">
          <td class="py-3 px-4">
            <div class="font-bold text-slate-900">${p.name}</div>
            <div class="text-[11px] text-slate-500">${p.gender} • ${p.colour}</div>
          </td>
          <td class="py-3 px-4">
            <div class="font-semibold text-slate-800">${p.cloth}</div>
            <div class="text-[11px] text-slate-500">${p.collar}</div>
          </td>
          <td class="py-3 px-4 font-extrabold text-emerald-700">${formatINR(p.rate)}</td>
          <td class="py-3 px-4 text-right">
            <div class="inline-flex gap-1.5">
              <button onclick="bookOrderWithProduct(${idx})" class="px-2.5 py-1 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold">
                + Order
              </button>
              <button onclick="deleteMasterProduct(${idx})" class="px-2 py-1 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-600 font-bold">
                ✕
              </button>
            </div>
          </td>
        </tr>
      `).join("");

      cliTbody.innerHTML = state.masterClients.map((c, idx) => `
        <tr class="hover:bg-slate-50">
          <td class="py-3 px-4">
            <div class="font-bold text-slate-900">${c.name}</div>
            <div class="text-[11px] text-slate-500">Code: ${c.code} • ${c.city}</div>
          </td>
          <td class="py-3 px-4">
            <div class="font-mono font-bold text-slate-800">${c.gstin}</div>
            <div class="text-[11px] text-indigo-600 font-semibold">${c.category}</div>
          </td>
          <td class="py-3 px-4 text-slate-600">${c.contact}</td>
          <td class="py-3 px-4 text-right">
            <div class="inline-flex gap-1.5">
              <button onclick="bookOrderWithClient(${idx})" class="px-2.5 py-1 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold">
                + Order
              </button>
              <button onclick="deleteMasterClient(${idx})" class="px-2 py-1 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-600 font-bold">
                ✕
              </button>
            </div>
          </td>
        </tr>
      `).join("");
    }

    function addMasterProduct(e) {
      e.preventDefault();
      const prod = {
        id: `PRD-${String(state.masterProducts.length + 1).padStart(2, "0")}`,
        name: document.getElementById("prod-name").value.trim().toUpperCase(),
        gender: document.getElementById("prod-gender").value,
        cloth: document.getElementById("prod-cloth").value.trim(),
        colour: document.getElementById("prod-colour").value.trim(),
        collar: document.getElementById("prod-collar").value.trim(),
        bottomPattern: document.getElementById("prod-bottom").value.trim(),
        pattern: document.getElementById("prod-pattern").value.trim(),
        rate: parseFloat(document.getElementById("prod-rate").value) || 650
      };
      state.masterProducts.unshift(prod);
      saveFlowState();
      document.getElementById("prod-name").value = "";
      showToast(`Added product "${prod.name}" to catalog.`, "success");
    }

    function deleteMasterProduct(idx) {
      state.masterProducts.splice(idx, 1);
      saveFlowState();
      showToast("Removed product from catalog.", "info");
    }

    function addMasterClient(e) {
      e.preventDefault();
      const cli = {
        id: `CLI-${String(state.masterClients.length + 1).padStart(2, "0")}`,
        code: document.getElementById("cli-code").value.trim(),
        name: document.getElementById("cli-name").value.trim(),
        gstin: document.getElementById("cli-gstin").value.trim().toUpperCase(),
        category: document.getElementById("cli-category").value,
        contact: document.getElementById("cli-contact").value.trim(),
        city: document.getElementById("cli-city").value.trim()
      };
      state.masterClients.unshift(cli);
      saveFlowState();
      document.getElementById("cli-name").value = "";
      document.getElementById("cli-gstin").value = "";
      showToast(`Added client "${cli.name}" to directory.`, "success");
    }

    function deleteMasterClient(idx) {
      state.masterClients.splice(idx, 1);
      saveFlowState();
      showToast("Removed client from directory.", "info");
    }

    function toggleInlineSoCreator(mode) {
      const cliBox = document.getElementById("inline-new-client-box");
      const prodBox = document.getElementById("inline-new-product-box");
      if (cliBox) cliBox.classList.toggle("hidden", mode !== "client");
      if (prodBox) prodBox.classList.toggle("hidden", mode !== "product");
    }

    function populateSaleOrderPresets() {
      const cliSel = document.getElementById("so-client-preset");
      const prodSel = document.getElementById("so-product-preset");
      if (cliSel) {
        cliSel.innerHTML = `<option value="">-- Choose Saved Client / Company --</option>` +
          `<option value="__NEW_CLIENT__">+ Create New Client / Company...</option>` +
          state.masterClients.map((c, idx) => `<option value="${idx}">${c.name} (${c.gstin})</option>`).join("");
      }
      if (prodSel) {
        prodSel.innerHTML = `<option value="">-- Choose Saved Product / Garment --</option>` +
          `<option value="__NEW_PRODUCT__">+ Create New Product / Garment...</option>` +
          state.masterProducts.map((p, idx) => `<option value="${idx}">${p.name} — ₹${p.rate}</option>`).join("");
      }
    }

    function handleSoClientDropdown(val) {
      if (val === "__NEW_CLIENT__") {
        toggleInlineSoCreator("client");
        document.getElementById("so-client-preset").value = "";
        return;
      }
      toggleInlineSoCreator("none");
      applyClientPreset(val);
    }

    function handleSoProductDropdown(val) {
      if (val === "__NEW_PRODUCT__") {
        toggleInlineSoCreator("product");
        document.getElementById("so-product-preset").value = "";
        return;
      }
      toggleInlineSoCreator("none");
      applyProductPreset(val);
    }

    function saveQuickClientFromSo() {
      const name = document.getElementById("quick-cli-name").value.trim();
      const gstin = document.getElementById("quick-cli-gstin").value.trim().toUpperCase();
      const phone = document.getElementById("quick-cli-phone").value.trim();
      const address = document.getElementById("quick-cli-address").value.trim() || "Hyderabad, Telangana";
      if (!name || !gstin) {
        showToast("Please enter Company/Hospital Name and GSTIN.", "warning");
        return;
      }
      const newCli = {
        id: `CLI-${String(state.masterClients.length + 1).padStart(2, "0")}`,
        code: String(1077 + state.masterClients.length + 1),
        name,
        gstin,
        category: "Hospital & Healthcare",
        contact: phone ? `Contact • ${phone}` : "Purchase Dept",
        city: address,
        phone
      };
      state.masterClients.unshift(newCli);
      saveFlowState();
      populateSaleOrderPresets();
      document.getElementById("so-client-preset").value = "0";
      applyClientPreset("0");
      if (phone) {
        document.getElementById("so-phone").value = phone;
        syncSoShippingPreview();
      }
      document.getElementById("quick-cli-name").value = "";
      document.getElementById("quick-cli-gstin").value = "";
      document.getElementById("quick-cli-phone").value = "";
      document.getElementById("quick-cli-address").value = "";
      toggleInlineSoCreator("none");
      showToast(`Created & auto-filled client "${name}".`, "success");
    }

    let soDraftItems = [];
    let activeSoItemIndex = 0;

    function createDefaultSoLineItem(prod = null) {
      if (prod) {
        return {
          style: prod.name,
          gender: prod.gender || "UNISEX",
          cloth: prod.cloth || "Alaskar",
          colour: prod.colour || "White",
          collar: prod.collar || "Standard Collar",
          pattern: prod.pattern || "",
          bottomPattern: prod.bottomPattern || "Standard Bottom",
          embrDesign: "LOGO on CHEST - Neat Logo Should Come",
          sizes: { "34": 0, "36": 0, "38": 10, "40": 0, "42": 0, "44": 0 },
          rate: Number(prod.rate) || 650
        };
      }
      return {
        style: "NURSE PANT SHIRT (3 TUCKS)",
        gender: "FEMALE",
        cloth: "Alaskar",
        colour: "White",
        collar: "Yashoda Collar",
        pattern: "3 Tucks Shirt Pattern Down 2 Pocket Front Open Buttons",
        bottomPattern: "Nada Phyajam",
        embrDesign: "LOGO on CHEST - Neat Logo Should Come",
        sizes: { "34": 4, "36": 4, "38": 6, "40": 0, "42": 0, "44": 0 },
        rate: 720
      };
    }

    function renderSoDraftItemsTable() {
      const tbody = document.getElementById("so-items-tbody");
      if (!tbody) return;
      if (!Array.isArray(soDraftItems) || soDraftItems.length === 0) {
        soDraftItems = [createDefaultSoLineItem(state.masterProducts[0] || null)];
      }
      if (activeSoItemIndex >= soDraftItems.length) activeSoItemIndex = soDraftItems.length - 1;

      tbody.innerHTML = soDraftItems.map((item, idx) => {
        const rowQty = Object.values(item.sizes || {}).reduce((a, b) => a + (Number(b) || 0), 0);
        const rowTaxable = rowQty * (Number(item.rate) || 0);
        const isSelected = idx === activeSoItemIndex;
        return `
          <tr onclick="setActiveSoItemRow(${idx})" class="align-top cursor-pointer ${isSelected ? 'bg-indigo-50/40' : 'bg-white'}">
            <td class="py-2.5 px-1 text-center border-r border-black font-bold">
              <div>${idx + 1}</div>
              ${isSelected ? '<span class="inline-block mt-1 px-1 rounded bg-indigo-600 text-white text-[8px] font-bold">ACTIVE</span>' : ''}
            </td>
            <td class="py-2 px-2 border-r border-black space-y-1.5">
              <div class="flex gap-1">
                <select onchange="applyProductToRow(${idx}, this.value)" class="w-full px-1.5 py-0.5 border border-indigo-200 rounded text-[10px] font-bold bg-indigo-50/60 text-indigo-950">
                  <option value="">-- Quick-Fill Product for Row ${idx + 1} --</option>
                  ${state.masterProducts.map((p, pIdx) => `<option value="${pIdx}">${p.name} (₹${p.rate})</option>`).join("")}
                </select>
              </div>
              <input type="text" value="${(item.style || '').replace(/"/g, '&quot;')}" oninput="updateSoItemField(${idx}, 'style', this.value)" placeholder="Item / Garment Description *" required class="w-full px-2 py-1 border border-slate-300 rounded font-extrabold uppercase text-[11px] bg-yellow-50/40 focus:bg-white focus:border-indigo-600 focus:outline-none">
              <div class="grid grid-cols-3 gap-1">
                <select onchange="updateSoItemField(${idx}, 'gender', this.value)" class="px-1.5 py-0.5 border border-slate-300 rounded text-[10px] font-bold bg-white">
                  <option value="UNISEX" ${item.gender === 'UNISEX' ? 'selected' : ''}>UNISEX</option>
                  <option value="FEMALE" ${item.gender === 'FEMALE' ? 'selected' : ''}>FEMALE</option>
                  <option value="MALE" ${item.gender === 'MALE' ? 'selected' : ''}>MALE</option>
                </select>
                <input type="text" value="${(item.cloth || '').replace(/"/g, '&quot;')}" oninput="updateSoItemField(${idx}, 'cloth', this.value)" placeholder="Cloth" class="px-1.5 py-0.5 border border-slate-300 rounded text-[10px] font-semibold">
                <input type="text" value="${(item.colour || '').replace(/"/g, '&quot;')}" oninput="updateSoItemField(${idx}, 'colour', this.value)" placeholder="Colour" class="px-1.5 py-0.5 border border-slate-300 rounded text-[10px] font-semibold">
              </div>
            </td>
            <td class="py-2 px-2 border-r border-black space-y-1.5">
              <input type="text" value="${(item.collar || '').replace(/"/g, '&quot;')}" oninput="updateSoItemField(${idx}, 'collar', this.value)" placeholder="Collar / Sub-Name" class="w-full px-1.5 py-0.5 border border-slate-300 rounded text-[10.5px] font-semibold">
              <textarea rows="2" oninput="updateSoItemField(${idx}, 'pattern', this.value)" placeholder="Pattern & Embroidery Details" class="w-full px-1.5 py-0.5 border border-slate-300 rounded text-[10px]">${item.pattern || ''}</textarea>
            </td>
            <td class="py-2 px-1.5 border-r border-black">
              <div class="text-[9.5px] font-bold text-slate-600 mb-1 text-center">Size Breakdown:</div>
              <div class="grid grid-cols-3 gap-1 text-center">
                ${["34", "36", "38", "40", "42", "44"].map(sz => `
                  <div>
                    <span class="block text-[8.5px] font-bold text-slate-500">${sz}</span>
                    <input type="number" value="${(item.sizes && item.sizes[sz]) || 0}" min="0" oninput="updateSoItemSize(${idx}, '${sz}', this.value)" class="w-full px-0.5 py-0.5 border border-slate-300 rounded text-center text-[10px] font-bold">
                  </div>
                `).join("")}
              </div>
            </td>
            <td class="py-2 px-1.5 text-right border-r border-black">
              <div id="so-row-qty-${idx}" class="font-extrabold text-[11.5px] py-1 px-1 bg-slate-100 rounded text-right">${formatPlain2(rowQty)}</div>
            </td>
            <td class="py-2 px-1.5 text-right border-r border-black">
              <input type="number" value="${item.rate}" min="0" step="0.01" oninput="updateSoItemRate(${idx}, this.value)" required class="w-full px-1.5 py-1 border border-slate-300 rounded text-right font-extrabold text-[11px] bg-yellow-50/40 focus:bg-white focus:border-indigo-600 focus:outline-none">
            </td>
            <td class="py-2 px-2 text-right font-extrabold text-[11.5px] border-r border-black">
              <div id="so-row-taxable-${idx}" class="py-1">${formatPlain2(rowTaxable)}</div>
            </td>
            <td class="py-2 px-1 text-center">
              <button type="button" onclick="event.stopPropagation(); removeSoLineItemRow(${idx})" title="Remove Item Row" class="px-1.5 py-1 rounded bg-rose-50 hover:bg-rose-100 text-rose-600 font-extrabold text-xs ${soDraftItems.length <= 1 ? 'opacity-30 cursor-not-allowed' : ''}">
                ✕
              </button>
            </td>
          </tr>
        `;
      }).join("");
      recalcSoDocumentTotals();
    }

    function setActiveSoItemRow(idx) {
      if (activeSoItemIndex === idx) return;
      activeSoItemIndex = idx;
      renderSoDraftItemsTable();
    }

    function addSoLineItemRow() {
      const nextProd = state.masterProducts[soDraftItems.length % Math.max(1, state.masterProducts.length)] || null;
      soDraftItems.push(createDefaultSoLineItem(nextProd));
      activeSoItemIndex = soDraftItems.length - 1;
      renderSoDraftItemsTable();
      showToast(`Added Item Row #${soDraftItems.length}.`, "info");
    }

    function removeSoLineItemRow(idx) {
      if (soDraftItems.length <= 1) {
        showToast("At least 1 item row is required on a Sale Order.", "warning");
        return;
      }
      soDraftItems.splice(idx, 1);
      if (activeSoItemIndex >= soDraftItems.length) activeSoItemIndex = soDraftItems.length - 1;
      renderSoDraftItemsTable();
    }

    function updateSoItemField(idx, field, val) {
      if (!soDraftItems[idx]) return;
      soDraftItems[idx][field] = field === "style" ? val.toUpperCase() : val;
    }

    function updateSoItemSize(idx, sz, val) {
      if (!soDraftItems[idx]) return;
      soDraftItems[idx].sizes[sz] = parseInt(val) || 0;
      const rowQty = Object.values(soDraftItems[idx].sizes).reduce((a, b) => a + (Number(b) || 0), 0);
      const rowTaxable = rowQty * (Number(soDraftItems[idx].rate) || 0);
      const qEl = document.getElementById(`so-row-qty-${idx}`);
      const tEl = document.getElementById(`so-row-taxable-${idx}`);
      if (qEl) qEl.textContent = formatPlain2(rowQty);
      if (tEl) tEl.textContent = formatPlain2(rowTaxable);
      recalcSoDocumentTotals();
    }

    function updateSoItemRate(idx, val) {
      if (!soDraftItems[idx]) return;
      soDraftItems[idx].rate = parseFloat(val) || 0;
      const rowQty = Object.values(soDraftItems[idx].sizes).reduce((a, b) => a + (Number(b) || 0), 0);
      const rowTaxable = rowQty * soDraftItems[idx].rate;
      const tEl = document.getElementById(`so-row-taxable-${idx}`);
      if (tEl) tEl.textContent = formatPlain2(rowTaxable);
      recalcSoDocumentTotals();
    }

    function applyProductToRow(rowIdx, prodIdxStr) {
      if (prodIdxStr === "") return;
      const p = state.masterProducts[parseInt(prodIdxStr)];
      if (!p || !soDraftItems[rowIdx]) return;
      soDraftItems[rowIdx].style = p.name;
      soDraftItems[rowIdx].gender = p.gender || "UNISEX";
      soDraftItems[rowIdx].cloth = p.cloth || "Alaskar";
      soDraftItems[rowIdx].colour = p.colour || "White";
      soDraftItems[rowIdx].collar = p.collar || "Standard Collar";
      soDraftItems[rowIdx].pattern = p.pattern || "";
      soDraftItems[rowIdx].bottomPattern = p.bottomPattern || "Standard Bottom";
      soDraftItems[rowIdx].rate = Number(p.rate) || 650;
      activeSoItemIndex = rowIdx;
      renderSoDraftItemsTable();
    }

    function saveQuickProductFromSo() {
      const name = document.getElementById("quick-prod-name").value.trim().toUpperCase();
      const rate = parseFloat(document.getElementById("quick-prod-rate").value) || 650;
      const gender = document.getElementById("quick-prod-gender").value;
      const cloth = document.getElementById("quick-prod-cloth").value.trim() || "Alaskar";
      const colour = document.getElementById("quick-prod-colour").value.trim() || "White";
      const collar = document.getElementById("quick-prod-collar").value.trim() || "Standard Collar";
      if (!name) {
        showToast("Please enter Product / Garment Description.", "warning");
        return;
      }
      const newProd = {
        id: `PRD-${String(state.masterProducts.length + 1).padStart(2, "0")}`,
        name,
        gender,
        cloth,
        colour,
        collar,
        pattern: `${collar} • ${cloth} (${colour})`,
        bottomPattern: "Standard Bottom",
        rate
      };
      state.masterProducts.unshift(newProd);
      saveFlowState();
      populateSaleOrderPresets();
      document.getElementById("so-product-preset").value = "0";
      applyProductToRow(activeSoItemIndex, "0");
      document.getElementById("quick-prod-name").value = "";
      toggleInlineSoCreator("none");
      showToast(`Created & applied product "${name}" to Row #${activeSoItemIndex + 1}.`, "success");
    }

    function syncSoShippingPreview() {
      const c = document.getElementById("so-client");
      const a = document.getElementById("so-address");
      const p = document.getElementById("so-phone");
      if (c && document.getElementById("so-ship-client")) document.getElementById("so-ship-client").value = c.value;
      if (a && document.getElementById("so-ship-address")) document.getElementById("so-ship-address").value = a.value;
      if (p && document.getElementById("so-ship-phone")) document.getElementById("so-ship-phone").value = p.value;
    }

    function recalcSoDocumentTotals() {
      let total = 0;
      let taxable = 0;
      soDraftItems.forEach(item => {
        const q = Object.values(item.sizes || {}).reduce((a, b) => a + (Number(b) || 0), 0);
        total += q;
        taxable += q * (Number(item.rate) || 0);
      });

      const gstPct = parseFloat(document.getElementById("so-gst-pct")?.value) || 0;
      const totalTax = taxable * (gstPct / 100);
      const halfTax = totalTax / 2;
      const afterTax = taxable + totalTax;

      const qBar = document.getElementById("so-doc-totalqty-bar");
      if (qBar) qBar.textContent = total;
      const bTax = document.getElementById("so-doc-before-tax");
      if (bTax) bTax.textContent = formatPlain2(taxable);
      const cgstEl = document.getElementById("so-doc-cgst");
      if (cgstEl) cgstEl.textContent = formatPlain2(halfTax);
      const sgstEl = document.getElementById("so-doc-sgst");
      if (sgstEl) sgstEl.textContent = formatPlain2(halfTax);
      const aTax = document.getElementById("so-doc-after-tax");
      if (aTax) aTax.textContent = formatPlain2(afterTax);
      const wordsEl = document.getElementById("so-doc-words");
      if (wordsEl) wordsEl.textContent = numberToIndianWords(afterTax);
      return total;
    }

    const GST_STATE_CODES = {
      "01": "Jammu & Kashmir", "02": "Himachal Pradesh", "03": "Punjab", "04": "Chandigarh",
      "05": "Uttarakhand", "06": "Haryana", "07": "Delhi", "08": "Rajasthan",
      "09": "Uttar Pradesh", "10": "Bihar", "11": "Sikkim", "12": "Arunachal Pradesh",
      "13": "Nagaland", "14": "Manipur", "15": "Mizoram", "16": "Tripura",
      "17": "Meghalaya", "18": "Assam", "19": "West Bengal", "20": "Jharkhand",
      "21": "Odisha", "22": "Chhattisgarh", "23": "Madhya Pradesh", "24": "Gujarat",
      "26": "Dadra & Nagar Haveli and Daman & Diu", "27": "Maharashtra", "29": "Karnataka",
      "30": "Goa", "31": "Lakshadweep", "32": "Kerala", "33": "Tamil Nadu",
      "34": "Puducherry", "35": "Andaman & Nicobar Islands", "36": "Telangana",
      "37": "Andhra Pradesh", "38": "Ladakh"
    };

    const GST_ENTITY_TYPES = {
      "C": "Private / Public Limited Company",
      "P": "Proprietorship Firm",
      "F": "Partnership Firm / LLP",
      "H": "Hindu Undivided Family (HUF)",
      "T": "Trust / Hospital Institution",
      "A": "Association of Persons (AOP)",
      "B": "Body of Individuals (BOI)",
      "G": "Government Department",
      "L": "Local Authority"
    };

    const KNOWN_GSTIN_DIRECTORY = {
      "36ACQPM0669R1ZM": {
        name: "S T Traders Annexe Cheap Jack Musheerabad",
        address: "1-5-24, Kubera Complex, Sri Krishna Colony, Musheerabad, Hyderabad 500020, Telangana",
        phone: "9347203651",
        category: "Retail / Wholesale Dealer"
      },
      "36AAIPF1095L1ZJ": {
        name: "ST TRADERS ANNEXE CHEAP JACK",
        address: "10-5-348/A, Tukaram Gate, Buddha Nagar, Lalaguda Gate, Secunderabad, Hyderabad 500017, Telangana",
        phone: "9347203651",
        category: "Retail / Wholesale Dealer"
      },
      "36AAACY4912K1Z2": {
        name: "Yashoda Healthcare Services Pvt Ltd (Yashoda Hospitals)",
        address: "Alexander Road, SP Road, Secunderabad, Hyderabad 500003, Telangana",
        phone: "9849022110",
        category: "Hospital & Healthcare"
      },
      "36AAACK6219P1Z9": {
        name: "Krishna Institute of Medical Sciences Ltd (KIMS Hospitals)",
        address: "1-8-31/1, Minister Road, Secunderabad, Hyderabad 500003, Telangana",
        phone: "9848033445",
        category: "Hospital & Healthcare"
      },
      "36AABCC8821M1Z4": {
        name: "Cherlapally Industrial & Pharma Corp",
        address: "Phase II, IDA Cherlapally, Hyderabad 500051, Telangana",
        phone: "9000177889",
        category: "Industrial & Pharma"
      },
      "36AAACC3910L1Z1": {
        name: "Quality Care India Ltd (CARE Hospitals Banjara Hills)",
        address: "Road No. 1, Banjara Hills, Hyderabad 500034, Telangana",
        phone: "9849155667",
        category: "Hospital & Healthcare"
      },
      "36AABCA4812M1Z5": {
        name: "Apollo Health and Lifestyle Ltd (Apollo Diagnostics)",
        address: "Jubilee Hills, Road No. 72, Hyderabad 500033, Telangana",
        phone: "9849044556",
        category: "Hospital & Healthcare"
      },
      "36AAACR7412N1Z8": {
        name: "Rainbow Children's Medicare Ltd (Rainbow Hospitals)",
        address: "Road No. 2, Banjara Hills, Hyderabad 500034, Telangana",
        phone: "9849066778",
        category: "Hospital & Healthcare"
      },
      "36AAACA8915D1Z3": {
        name: "Asian Institute of Gastroenterology Pvt Ltd (AIG Hospitals)",
        address: "Mindspace Road, Gachibowli, Hyderabad 500032, Telangana",
        phone: "9849088990",
        category: "Hospital & Healthcare"
      },
      "36AAACH3210F1Z6": {
        name: "Hetero Labs Limited",
        address: "7-2-A2, Hetero Corporate, Industrial Estates, Sanathnagar, Hyderabad 500018, Telangana",
        phone: "9848011223",
        category: "Industrial & Pharma"
      }
    };

    // Official Indian GSTIN Mod-36 Check-Digit Verification
    function verifyGstinCheckDigit(gstin) {
      const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      if (!gstin || gstin.length !== 15) return false;
      let sum = 0;
      for (let i = 0; i < 14; i++) {
        const codeVal = chars.indexOf(gstin[i]);
        if (codeVal === -1) return false;
        const factor = (i % 2 === 0) ? 1 : 2;
        const product = codeVal * factor;
        const quotient = Math.floor(product / 36);
        const remainder = product % 36;
        sum += quotient + remainder;
      }
      const checkCode = (36 - (sum % 36)) % 36;
      return chars[checkCode] === gstin[14];
    }

    function parseIndianGstinMetadata(gstin) {
      const clean = (gstin || "").trim().toUpperCase();
      const gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
      const stateCode = clean.slice(0, 2);
      const pan = clean.slice(2, 12);
      const entityChar = clean.charAt(5);
      const stateName = GST_STATE_CODES[stateCode] || `State Code ${stateCode}`;
      const entityType = GST_ENTITY_TYPES[entityChar] || "Registered Business Entity";
      const isFormatOk = gstRegex.test(clean);
      const isChecksumOk = isFormatOk && verifyGstinCheckDigit(clean);
      return {
        gstin: clean,
        isValidFormat: isFormatOk,
        isChecksumValid: isChecksumOk,
        stateCode,
        stateName,
        pan,
        entityType
      };
    }

    function handleGstinAutoFetch(rawVal, targetContext) {
      if (targetContext === "so") recalcSoDocumentTotals();
      const clean = (rawVal || "").trim().toUpperCase();
      if (clean.length === 15) {
        fetchGstinDetails(clean, targetContext, false);
      }
    }

    async function queryLiveGstinTaxpayer(cleanGstin) {
      // Try multiple public GST taxpayer lookup endpoints with short timeout
      const endpoints = [
        `https://razorpay.com/api/gstin/${cleanGstin}`,
        `https://gst-insights-api.vakilsearch.com/api/v1/gstin/${cleanGstin}`,
        `https://api.allorigins.win/raw?url=${encodeURIComponent("https://razorpay.com/api/gstin/" + cleanGstin)}`
      ];

      for (const url of endpoints) {
        try {
          const ctrl = new AbortController();
          const timer = setTimeout(() => ctrl.abort(), 3500);
          const resp = await fetch(url, { method: "GET", signal: ctrl.signal });
          clearTimeout(timer);
          if (!resp.ok) continue;
          const json = await resp.json();
          const info = json?.taxpayerInfo || json?.data?.taxpayerInfo || json?.data || json;
          const legalName = info?.tradeNam || info?.tradeName || info?.lgnm || info?.legalName || info?.name;
          if (legalName && typeof legalName === "string" && legalName.trim().length > 2) {
            const addrObj = info?.pradr?.addr || info?.address || {};
            let addrStr = "";
            if (typeof addrObj === "string") {
              addrStr = addrObj;
            } else if (addrObj && typeof addrObj === "object") {
              addrStr = [addrObj.bno, addrObj.bnm, addrObj.flno, addrObj.st, addrObj.loc, addrObj.dst, addrObj.stcd, addrObj.pncd]
                .filter(Boolean).join(", ");
            }
            return {
              name: legalName.trim(),
              address: addrStr,
              phone: "",
              category: "Hospital & Healthcare",
              source: "Live GST Portal"
            };
          }
        } catch (e) {
          // Try next endpoint
        }
      }
      return null;
    }

    async function fetchGstinDetails(rawGstin, targetContext, manualClick = false) {
      const clean = (rawGstin || "").trim().toUpperCase();
      if (clean.length !== 15) {
        if (manualClick) showToast("Please enter a complete 15-digit GSTIN number.", "warning");
        return;
      }

      const meta = parseIndianGstinMetadata(clean);
      if (!meta.isValidFormat) {
        showToast(`Invalid GSTIN format (${clean}). Must be 15 alphanumeric characters.`, "warning");
        return;
      }
      if (!meta.isChecksumValid) {
        showToast(`GSTIN Check-Digit Warning: 15th character of ${clean} failed Mod-36 verification. Please double-check digits.`, "warning");
      }

      let resolved = null;

      // 1. Check Saved Master Clients (exact match)
      const savedCli = state.masterClients.find(c => (c.gstin || "").trim().toUpperCase() === clean);
      if (savedCli) {
        resolved = {
          name: savedCli.name,
          address: savedCli.city || `${meta.stateName}, India`,
          phone: savedCli.phone || (savedCli.contact && savedCli.contact.includes("+") ? savedCli.contact.split("•").pop().trim() : ""),
          category: savedCli.category || "Hospital & Healthcare",
          source: "Saved Client Master"
        };
      }

      // 2. Check Previous Sale Orders (exact match)
      if (!resolved) {
        const pastSo = state.saleOrders.find(o => (o.gstin || "").trim().toUpperCase() === clean);
        if (pastSo) {
          resolved = {
            name: pastSo.client,
            address: pastSo.address || `${meta.stateName}, India`,
            phone: pastSo.phone || "",
            category: "Hospital & Healthcare",
            source: "Previous Sale Order"
          };
        }
      }

      // 3. Check Regional Healthcare & Corporate GSTIN Directory
      if (!resolved && KNOWN_GSTIN_DIRECTORY[clean]) {
        resolved = {
          ...KNOWN_GSTIN_DIRECTORY[clean],
          source: "Regional GST Directory"
        };
      }

      // 4. Query Live Public GST Taxpayer Endpoints
      if (!resolved) {
        showToast(`Checking GST Portal for ${clean} (${meta.stateName})...`, "info");
        resolved = await queryLiveGstinTaxpayer(clean);
      }

      // 5. If Live Portal is unreachable from browser CORS/offline, DO NOT overwrite Name with fake placeholder text!
      //    Instead, keep Name clean & focused for typing the exact Trade Name, and pre-fill State & Category accurately.
      if (!resolved) {
        const stateAddr = `${meta.stateName} (State Code ${meta.stateCode})`;
        const autoCat = meta.entityType.includes("Trust") ? "Hospital & Healthcare" : "Corporate & Hospitality";

        if (targetContext === "so") {
          document.getElementById("so-gstin").value = clean;
          const nameEl = document.getElementById("so-client");
          if (nameEl && nameEl.value.startsWith("M/s Registered")) nameEl.value = "";
          if (nameEl) { nameEl.placeholder = `Type Legal/Trade Name for PAN ${meta.pan} *`; nameEl.focus(); }
          const addrEl = document.getElementById("so-address");
          if (addrEl && (!addrEl.value.trim() || addrEl.value.includes("Kubera Complex"))) {
            addrEl.value = stateAddr;
          }
          syncSoShippingPreview();
          recalcSoDocumentTotals();
        } else if (targetContext === "quick") {
          document.getElementById("quick-cli-gstin").value = clean;
          const qName = document.getElementById("quick-cli-name");
          if (qName) { qName.value = ""; qName.placeholder = `Type Legal/Trade Name for PAN ${meta.pan} *`; qName.focus(); }
          const qAddr = document.getElementById("quick-cli-address");
          if (qAddr && !qAddr.value.trim()) qAddr.value = stateAddr;
        } else if (targetContext === "master") {
          document.getElementById("cli-gstin").value = clean;
          const mName = document.getElementById("cli-name");
          if (mName) { mName.value = ""; mName.placeholder = `Type Legal/Trade Name for PAN ${meta.pan} *`; mName.focus(); }
          const mCity = document.getElementById("cli-city");
          if (mCity) mCity.value = stateAddr;
          const catSel = document.getElementById("cli-category");
          if (catSel) catSel.value = autoCat;
        }

        showToast(`Verified ${meta.isChecksumValid ? 'Valid' : 'Format'} GSTIN • ${meta.stateName} (${meta.stateCode}) • ${meta.entityType} (PAN: ${meta.pan}). Enter Firm Name once—it will auto-save for future orders.`, "info");
        return;
      }

      // Apply exact resolved Firm / Company details
      if (targetContext === "so") {
        document.getElementById("so-gstin").value = clean;
        document.getElementById("so-client").value = resolved.name;
        if (resolved.address) document.getElementById("so-address").value = resolved.address;
        if (resolved.phone && document.getElementById("so-phone")) {
          document.getElementById("so-phone").value = resolved.phone;
        }
        syncSoShippingPreview();
        recalcSoDocumentTotals();
      } else if (targetContext === "quick") {
        document.getElementById("quick-cli-gstin").value = clean;
        document.getElementById("quick-cli-name").value = resolved.name;
        if (resolved.address) document.getElementById("quick-cli-address").value = resolved.address;
        if (resolved.phone) document.getElementById("quick-cli-phone").value = resolved.phone;
      } else if (targetContext === "master") {
        document.getElementById("cli-gstin").value = clean;
        document.getElementById("cli-name").value = resolved.name;
        if (resolved.address) document.getElementById("cli-city").value = resolved.address;
        const catSel = document.getElementById("cli-category");
        if (catSel && resolved.category) catSel.value = resolved.category;
        if (resolved.phone && document.getElementById("cli-contact")) {
          document.getElementById("cli-contact").value = `Purchase Dept • +91 ${resolved.phone}`;
        }
      }

      showToast(`Fetched [${resolved.source}]: ${resolved.name}`, "success");
    }

    function applyClientPreset(idxStr) {
      if (idxStr === "" || idxStr === "__NEW_CLIENT__") return;
      const c = state.masterClients[parseInt(idxStr)];
      if (!c) return;
      document.getElementById("so-client").value = c.name;
      document.getElementById("so-gstin").value = c.gstin;
      const addrEl = document.getElementById("so-address");
      if (addrEl && c.city) addrEl.value = c.city;
      const phoneEl = document.getElementById("so-phone");
      if (phoneEl) phoneEl.value = c.phone || "";
      syncSoShippingPreview();
      recalcSoDocumentTotals();
    }

    function applyProductPreset(idxStr) {
      if (idxStr === "" || idxStr === "__NEW_PRODUCT__") return;
      applyProductToRow(activeSoItemIndex, idxStr);
    }

    function bookOrderWithProduct(idx) {
      openNewSaleOrderModal();
      document.getElementById("so-product-preset").value = String(idx);
      applyProductPreset(String(idx));
    }

    function bookOrderWithClient(idx) {
      openNewSaleOrderModal();
      document.getElementById("so-client-preset").value = String(idx);
      applyClientPreset(String(idx));
    }

    function handleGlobalSearch(val) {
      trackingQuery = (val || "").trim();
      const topInput = document.getElementById("global-search-input");
      const pageInput = document.getElementById("tracking-search-box");
      const clearBtn = document.getElementById("global-search-clear");
      if (topInput && topInput.value !== val) topInput.value = val;
      if (pageInput && pageInput.value !== val) pageInput.value = val;
      if (clearBtn) {
        if (trackingQuery.length > 0) clearBtn.classList.remove("hidden");
        else clearBtn.classList.add("hidden");
      }
      if (trackingQuery.length > 0) {
        switchStep("tracking");
      } else {
        renderTrackingPage();
      }
    }

    function syncTrackingSearch(val) {
      trackingQuery = (val || "").trim();
      const topInput = document.getElementById("global-search-input");
      const clearBtn = document.getElementById("global-search-clear");
      if (topInput) topInput.value = val;
      if (clearBtn) {
        if (trackingQuery.length > 0) clearBtn.classList.remove("hidden");
        else clearBtn.classList.add("hidden");
      }
      renderTrackingPage();
    }

    function clearGlobalSearch() {
      trackingQuery = "";
      const topInput = document.getElementById("global-search-input");
      const pageInput = document.getElementById("tracking-search-box");
      const clearBtn = document.getElementById("global-search-clear");
      if (topInput) topInput.value = "";
      if (pageInput) pageInput.value = "";
      if (clearBtn) clearBtn.classList.add("hidden");
      renderTrackingPage();
    }

    function filterTrackingCategory(cat) {
      trackingFilterType = cat;
      document.querySelectorAll(".track-pill").forEach(btn => {
        btn.className = "track-pill px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-bold";
      });
      const active = document.getElementById(`track-pill-${cat}`);
      if (active) active.className = "track-pill px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-bold";
      renderTrackingPage();
    }

    function renderTrackingPage() {
      const grid = document.getElementById("tracking-results-grid");
      const summary = document.getElementById("tracking-summary-bar");
      if (!grid) return;

      const q = trackingQuery.toLowerCase();

      // Build unified lifecycle records anchored on Sale Orders + standalone Invoices
      const trackedSoIds = new Set();
      const records = [];

      state.saleOrders.forEach(so => {
        trackedSoIds.add(so.id);
        const slip = state.cuttingSlips.find(c => c.soId === so.id) || null;
        const alloc = state.allocations.find(a => a.soId === so.id) || null;
        const fg = state.finishedGoods.find(f => f.soId === so.id) || null;
        const invIndex = state.invoices.findIndex(i => i.soId === so.id);
        const inv = invIndex >= 0 ? state.invoices[invIndex] : null;

        records.push({
          type: "ORDER_FLOW",
          soId: so.id,
          nameCode: so.nameCode || "",
          date: so.date,
          client: so.client,
          gstin: so.gstin,
          style: so.style,
          qty: so.totalQty,
          cloth: so.cloth,
          colour: so.colour,
          stage: so.stage,
          slip,
          alloc,
          fg,
          inv,
          invIndex
        });
      });

      state.invoices.forEach((inv, idx) => {
        if (!trackedSoIds.has(inv.soId)) {
          const fg = state.finishedGoods.find(f => f.soId === inv.soId) || null;
          records.push({
            type: "INVOICE_FLOW",
            soId: inv.soId,
            nameCode: "",
            date: inv.date,
            client: inv.client,
            gstin: inv.gstin,
            style: inv.style,
            qty: inv.qty,
            cloth: "Finished Lot",
            colour: "-",
            stage: "Tax Invoice Raised",
            slip: null,
            alloc: null,
            fg,
            inv,
            invIndex: idx
          });
        }
      });

      const filtered = records.filter(r => {
        if (trackingFilterType === "SLIP" && !r.slip) return false;
        if (trackingFilterType === "INV" && !r.inv) return false;
        if (!q) return true;

        const haystack = [
          r.soId,
          r.nameCode,
          r.client,
          r.gstin,
          r.style,
          r.cloth,
          r.colour,
          r.stage,
          r.slip ? r.slip.slipId : "",
          r.alloc ? `${r.alloc.allocId} ${r.alloc.tailor} ${r.alloc.unit}` : "",
          r.fg ? r.fg.fgId : "",
          r.inv ? `${r.inv.invNo} ${r.inv.transport}` : ""
        ].join(" ").toLowerCase();

        return haystack.includes(q);
      });

      if (summary) {
        summary.textContent = q
          ? `Found ${filtered.length} matching record(s) for "${trackingQuery}"`
          : `Showing ${filtered.length} end-to-end order, slip & invoice records`;
      }

      if (filtered.length === 0) {
        grid.innerHTML = `
          <div class="bg-white rounded-2xl border border-slate-200 p-10 text-center space-y-2">
            <div class="text-base font-bold text-slate-800">No matching Sale Order, Cutting Slip, Invoice, or Company found</div>
            <p class="text-xs text-slate-500">Try searching by Order ID (e.g. <code>3496</code> or <code>2716</code>), Slip ID (<code>CS-2716</code>), Invoice (<code>0415</code>), or Hospital Name (<code>Yashoda</code>, <code>KIMS</code>, <code>Care</code>).</p>
          </div>
        `;
        return;
      }

      grid.innerHTML = filtered.map(r => {
        const s1Done = true;
        const s2Done = Boolean(r.slip);
        const s3Done = Boolean(r.alloc);
        const s4Done = Boolean(r.fg);
        const s5Done = Boolean(r.inv);

        const stepBadge = (done, label, detail) => `
          <div class="p-3 rounded-xl border ${done ? 'border-emerald-200 bg-emerald-50/50' : 'border-slate-200 bg-slate-50/70 opacity-70'}">
            <div class="flex items-center justify-between text-[11px] font-extrabold ${done ? 'text-emerald-700' : 'text-slate-400'}">
              <span>${label}</span>
              <span>${done ? '✓' : 'Pending'}</span>
            </div>
            <div class="text-xs font-bold text-slate-800 mt-1 truncate">${detail}</div>
          </div>
        `;

        return `
          <div class="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4">
            <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-3 border-b border-slate-100 pb-3.5">
              <div>
                <div class="flex flex-wrap items-center gap-2">
                  <span class="px-2.5 py-0.5 rounded-lg bg-slate-900 text-white text-xs font-extrabold">${r.soId}</span>
                  ${r.slip ? `<span class="px-2.5 py-0.5 rounded-lg bg-amber-100 text-amber-900 text-xs font-extrabold">Slip: ${r.slip.slipId}</span>` : ''}
                  ${r.inv ? `<span class="px-2.5 py-0.5 rounded-lg bg-emerald-100 text-emerald-900 text-xs font-extrabold">Invoice: ${r.inv.invNo}</span>` : ''}
                  <span class="px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 text-[11px] font-bold">${r.stage}</span>
                </div>
                <h3 class="text-base font-extrabold text-slate-900 mt-1.5">${r.client} <span class="text-xs font-mono font-normal text-slate-500">(${r.gstin})</span></h3>
                <p class="text-xs text-slate-600 mt-0.5"><strong>${r.style}</strong> • ${r.qty} Pairs/Pcs • Cloth: ${r.cloth} (${r.colour}) • Date: ${r.date}</p>
              </div>

              <div class="flex flex-wrap gap-2">
                <button onclick="openSaleOrderPrint('${r.soId}')" class="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition">
                  Print SO
                </button>
                ${r.slip ? `
                  <button onclick="openCuttingSlipPreview('${r.slip.slipId}')" class="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-indigo-600 text-white text-xs font-bold transition">
                    Print Cutting Slip
                  </button>
                ` : `
                  <button onclick="generateCuttingSlipFromSo('${r.soId}')" class="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition">
                    Generate Cutting Slip →
                  </button>
                `}
                ${r.inv ? `
                  <button onclick="openTaxInvoicePrint(${r.invIndex})" class="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition">
                    Print Tax Invoice
                  </button>
                ` : ''}
              </div>
            </div>

            <!-- 5-Stage Visual Progress Strip -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
              ${stepBadge(s1Done, "1. Sale Order", `${r.soId} (${r.qty} pcs)`)}
              ${stepBadge(s2Done, "2. Cutting Slip", r.slip ? `${r.slip.slipId} • ${r.slip.metersIssued}m` : "Not generated yet")}
              ${stepBadge(s3Done, "3. Tailor & Unit", r.alloc ? `${r.alloc.tailor.split(' (')[0]} (${r.alloc.stitchedQty}/${r.alloc.totalQty})` : "Awaiting allocation")}
              ${stepBadge(s4Done, "4. Finished Goods", r.fg ? `${r.fg.fgId} • ${r.fg.passedQty} Passed (${r.fg.cartons} Ctn)` : "In production")}
              ${stepBadge(s5Done, "5. Tax Invoice", r.inv ? `${r.inv.invNo} • ${formatINR(r.inv.grandTotal)}` : "Not billed yet")}
            </div>
          </div>
        `;
      }).join("");
    }

    function formatSizeRatio(sizes) {
      return Object.entries(sizes || {})
        .filter(([, qty]) => qty > 0)
        .map(([sz, qty]) => `${sz}/${qty}`)
        .join("+");
    }

    // =========================================================================
    // RENDER DASHBOARD OVERVIEW
    // =========================================================================
    function renderDashboardOverview() {
      const totalSoValue = state.saleOrders.reduce((s, o) => s + (o.totalQty * o.rate), 0);
      const totalSoPairs = state.saleOrders.reduce((s, o) => s + o.totalQty, 0);
      document.getElementById("dash-kpi-so-val").textContent = formatINR(totalSoValue);
      document.getElementById("dash-kpi-so-sub").textContent = `${state.saleOrders.length} active orders • ${totalSoPairs.toLocaleString("en-IN")} pairs/pcs`;

      const wipPcs = state.allocations.reduce((s, a) => s + a.totalQty, 0);
      const wipWages = state.allocations.reduce((s, a) => s + (a.stitchedQty * a.pieceRate), 0);
      document.getElementById("dash-kpi-wip-pcs").textContent = `${wipPcs.toLocaleString("en-IN")} pcs`;
      document.getElementById("dash-kpi-wip-wages").textContent = `Accrued Tailor Wages: ${formatINR(wipWages)}`;

      const fgPcs = state.finishedGoods.reduce((s, f) => s + f.passedQty, 0);
      const fgCartons = state.finishedGoods.reduce((s, f) => s + f.cartons, 0);
      document.getElementById("dash-kpi-fg-pcs").textContent = `${fgPcs.toLocaleString("en-IN")} pcs`;
      document.getElementById("dash-kpi-fg-cartons").textContent = `${fgCartons} packed cartons ready to bill`;

      const invVal = state.invoices.reduce((s, i) => s + i.grandTotal, 0);
      document.getElementById("dash-kpi-inv-val").textContent = formatINR(invVal);
      document.getElementById("dash-kpi-inv-sub").textContent = `${state.invoices.length} GST Tax Invoices issued`;

      const pipelineStages = [
        { step: "sale-orders", title: "1. Sale Orders", count: state.saleOrders.length, unit: "Orders Booked", tone: "border-indigo-200 bg-indigo-50/40 text-indigo-700" },
        { step: "cutting-slips", title: "2. Cutting Slips", count: state.cuttingSlips.length, unit: "Slips Ready", tone: "border-amber-200 bg-amber-50/40 text-amber-800" },
        { step: "allocation", title: "3. Tailor & Unit", count: state.allocations.length, unit: "Floor Runs", tone: "border-sky-200 bg-sky-50/40 text-sky-800" },
        { step: "receiving-fg", title: "4. Receive FG", count: fgPcs, unit: "Good Pcs in Store", tone: "border-emerald-200 bg-emerald-50/40 text-emerald-800" },
        { step: "tax-invoice", title: "5. Tax Invoice", count: state.invoices.length, unit: "GST Bills Raised", tone: "border-slate-300 bg-slate-100/60 text-slate-900" }
      ];

      document.getElementById("dash-pipeline-grid").innerHTML = pipelineStages.map(st => `
        <button onclick="switchStep('${st.step}')" class="text-left p-4 rounded-xl border ${st.tone} hover:shadow-xs transition">
          <div class="text-xs font-extrabold">${st.title}</div>
          <div class="text-2xl font-extrabold mt-1.5">${st.count}</div>
          <div class="text-[11px] font-medium opacity-80 mt-0.5">${st.unit} →</div>
        </button>
      `).join("");

      document.getElementById("dash-orders-tbody").innerHTML = state.saleOrders.map(so => {
        const hasSlip = state.cuttingSlips.find(c => c.soId === so.id);
        return `
          <tr class="hover:bg-slate-50">
            <td class="py-3 px-2">
              <div class="font-bold text-slate-900">${so.id}</div>
              <div class="text-[11px] text-slate-500">${so.client}</div>
            </td>
            <td class="py-3 px-2">
              <div class="font-semibold text-slate-800">${so.style}</div>
              <div class="text-[11px] text-slate-500">${so.totalQty} Pairs • ${so.cloth}</div>
            </td>
            <td class="py-3 px-2">
              <span class="px-2 py-0.5 rounded-full text-[11px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">${so.stage}</span>
            </td>
            <td class="py-3 px-2 text-right">
              ${hasSlip ? `
                <button onclick="openCuttingSlipPreview('${hasSlip.slipId}')" class="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-indigo-600 text-white text-[11px] font-bold transition">
                  Print Cutting Slip
                </button>
              ` : `
                <button onclick="generateCuttingSlipFromSo('${so.id}')" class="px-2.5 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-[11px] font-bold transition">
                  Generate Slip →
                </button>
              `}
            </td>
          </tr>
        `;
      }).join("");

      document.getElementById("dash-tailor-list").innerHTML = state.allocations.map(al => {
        const pct = Math.min(100, Math.round((al.stitchedQty / al.totalQty) * 100));
        return `
          <div class="p-3 rounded-xl border border-slate-100 bg-slate-50">
            <div class="flex justify-between text-xs font-bold text-slate-800">
              <span>${al.tailor}</span>
              <span>${al.stitchedQty}/${al.totalQty} pcs (${pct}%)</span>
            </div>
            <div class="text-[11px] text-slate-500 mb-1.5">${al.unit} • ${al.slipId}</div>
            <div class="w-full h-1.5 rounded-full bg-slate-200 overflow-hidden">
              <div class="h-full bg-indigo-600 rounded-full" style="width:${pct}%"></div>
            </div>
          </div>
        `;
      }).join("");

      document.getElementById("dash-fabric-list").innerHTML = state.fabrics.map(f => `
        <div class="flex items-center justify-between text-xs p-2.5 rounded-xl bg-slate-50 border border-slate-100">
          <span class="font-semibold text-slate-800">${f.name}</span>
          <span class="font-extrabold ${f.stock < 400 ? 'text-rose-600' : 'text-emerald-700'}">${f.stock} m</span>
        </div>
      `).join("");
    }

    // =========================================================================
    // RENDER STEP 1: SALE ORDERS
    // =========================================================================
    function renderSaleOrders() {
      const tbody = document.getElementById("sale-orders-tbody");
      tbody.innerHTML = state.saleOrders.map(so => {
        const hasSlip = state.cuttingSlips.some(cs => cs.soId === so.id);
        const ratio = formatSizeRatio(so.sizes);
        return `
          <tr class="hover:bg-slate-50 transition">
            <td class="py-3.5 px-4">
              <div class="font-bold text-slate-900 text-xs">${so.id}</div>
              <div class="text-[11px] text-slate-500">NAME: ${so.nameCode} • ${so.date}</div>
            </td>
            <td class="py-3.5 px-4">
              <div class="font-semibold text-slate-800 text-xs">${so.client}</div>
              <div class="text-[11px] font-mono text-slate-500">${so.gstin}</div>
            </td>
            <td class="py-3.5 px-4">
              <div class="font-bold text-slate-900 text-xs">${so.style} (${so.gender})</div>
              <div class="text-[11px] text-slate-500">Cloth: ${so.cloth} • Colour: ${so.colour}</div>
            </td>
            <td class="py-3.5 px-4 text-xs">
              <div class="font-extrabold text-indigo-700">${so.totalQty} Pairs/Pcs</div>
              <div class="text-[11px] text-slate-500">SIZE: ${ratio}</div>
            </td>
            <td class="py-3.5 px-4 text-xs font-extrabold text-slate-900">${formatINR(so.totalQty * so.rate)}</td>
            <td class="py-3.5 px-4">
              <span class="px-2.5 py-1 rounded-full text-[11px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">${so.stage}</span>
            </td>
            <td class="py-3.5 px-4 text-right">
              <div class="inline-flex flex-wrap justify-end gap-1.5">
                <button onclick="openSaleOrderPrint('${so.id}')" class="px-2.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition">
                  Print SO
                </button>
                ${!hasSlip ? `
                  <button onclick="generateCuttingSlipFromSo('${so.id}')" class="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition">
                    Generate Cutting Slip →
                  </button>
                ` : `
                  <button onclick="switchStep('cutting-slips')" class="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold">
                    View Cutting Slip →
                  </button>
                `}
              </div>
            </td>
          </tr>
        `;
      }).join("");
    }

    // =========================================================================
    // PRINT SALE ORDER / ESTIMATE IN EXACT ST TRADERS ANNEXE CHEAP JACK FORMAT
    // =========================================================================
    function openSaleOrderPrint(soId) {
      const so = state.saleOrders.find(x => x.id === soId);
      if (!so) return;

      const lineItems = (Array.isArray(so.items) && so.items.length > 0)
        ? so.items
        : [{
            style: so.style,
            gender: so.gender,
            cloth: so.cloth,
            colour: so.colour,
            collar: so.collar,
            pattern: so.pattern,
            sizes: so.sizes,
            qty: so.totalQty,
            rate: so.rate,
            taxable: so.totalQty * so.rate
          }];

      const taxableAmt = lineItems.reduce((sum, it) => sum + (Number(it.taxable) || (Number(it.qty) * Number(it.rate))), 0);
      const totalQtySum = lineItems.reduce((sum, it) => sum + (Number(it.qty) || 0), 0);
      const gstPct = Number(so.gstPct) || 5;
      const isIntra = (so.gstin || "36").startsWith("36");
      const halfTax = (taxableAmt * (gstPct / 100)) / 2;
      const totalTax = taxableAmt * (gstPct / 100);
      const afterTaxTotal = taxableAmt + totalTax;

      const dispDate = (so.date || "").split("-").reverse().join("/");
      const custAddress = so.address || "1-5-24, Kubera Complex, Sri Krishna Colony, Musheerabad, Hyderabad 500020";
      const shipClient = so.shipClient || so.client;
      const shipAddress = so.shipAddress || custAddress;
      const shipPhone = so.shipPhone || so.phone || "";
      const orderRef = so.orderRef || `ORD-${so.nameCode || "11017"}`;
      const amountWords = numberToIndianWords(afterTaxTotal);

      const minBodyHeight = Math.max(80, 295 - (lineItems.length - 1) * 34);
      const rowsHtml = lineItems.map((it, idx) => {
        const ratio = formatSizeRatio(it.sizes);
        const sizeSummary = ratio ? `SIZE: ${ratio}` : "Size";
        const rowTaxable = Number(it.taxable) || (Number(it.qty) * Number(it.rate));
        const isLast = idx === lineItems.length - 1;
        return `
          <tr class="align-top ${!isLast ? 'border-b border-black/30' : ''}">
            <td class="py-2 px-1 text-center border-r border-black ${isLast ? `h-[${minBodyHeight}px]` : ''}">${idx + 1}</td>
            <td class="py-2 px-2 border-r border-black">
              <div contenteditable="true" class="font-semibold uppercase outline-none focus:bg-yellow-50">${it.style}</div>
              <div contenteditable="true" class="text-[10px] text-slate-700 mt-0.5 outline-none focus:bg-yellow-50">${it.cloth || ''} • Colour: ${it.colour || ''} • Collar: ${it.collar || ''}</div>
            </td>
            <td class="py-2 px-2 border-r border-black">
              <div contenteditable="true" class="outline-none focus:bg-yellow-50">${it.pattern || "-"}</div>
            </td>
            <td class="py-2 px-1.5 border-r border-black font-bold text-center">
              <div contenteditable="true" class="outline-none focus:bg-yellow-50">${sizeSummary}</div>
            </td>
            <td class="py-2 px-2 text-right border-r border-black font-extrabold">
              <span contenteditable="true" class="outline-none focus:bg-yellow-50">${formatPlain2(it.qty)}</span>
            </td>
            <td class="py-2 px-2 text-right border-r border-black">
              <span contenteditable="true" class="outline-none focus:bg-yellow-50">${formatPlain2(it.rate)}</span>
            </td>
            <td class="py-2 px-2 text-right font-semibold">
              <span contenteditable="true" class="outline-none focus:bg-yellow-50">${formatPlain2(rowTaxable)}</span>
            </td>
          </tr>
        `;
      }).join("");

      document.getElementById("cutting-slip-toolbar").classList.add("hidden");
      document.getElementById("print-modal-title").textContent = `Sale Order / Estimate — ${so.id}`;

      document.getElementById("print-area").innerHTML = `
        <div class="so-a4-sheet border border-black bg-white text-black font-sans text-[11px] leading-snug select-text">
          <div>
            <!-- Top Right ORIGINAL + Main Company Header -->
            <div class="px-3 pt-1.5 pb-2 border-b border-black relative">
              <div class="text-right text-[10px] font-semibold tracking-wide">ORIGINAL</div>
              <div class="text-center -mt-1">
                <h1 class="text-[20px] font-extrabold tracking-wide uppercase">ST TRADERS ANNEXE CHEAP JACK</h1>
                <p class="text-[10.5px] font-medium">10-5-348/A, Tukaram Gate, Buddha Nagar, Lalaguda gate,, Secundrabad, 500017, Ph</p>
                <p class="text-[10.5px] font-medium">No:9347203651,, GST No: 36AAIPF1095L1ZJ</p>
                <p class="text-[10.5px] font-medium">sttradersannexecheapjack@gmail.com</p>
                <div class="text-[15px] font-extrabold uppercase tracking-wide mt-0.5">SALE ORDER/ESTIMATE</div>
              </div>
            </div>

            <!-- SO No. | Order Ref | SO Date Row -->
            <div class="grid grid-cols-12 px-2.5 py-1 border-b border-black text-[11px] items-center">
              <div class="col-span-4"><span class="font-bold">SO No. :</span> <span contenteditable="true" class="font-extrabold outline-none focus:bg-yellow-50">${so.id}</span></div>
              <div class="col-span-4 text-center"><span contenteditable="true" class="font-extrabold uppercase outline-none focus:bg-yellow-50">${orderRef}</span></div>
              <div class="col-span-4 text-right"><span class="font-bold">SO Date :</span> <span contenteditable="true" class="font-extrabold outline-none focus:bg-yellow-50">${dispDate}</span></div>
            </div>

            <!-- Customer Details & Shipping Address Split Box -->
            <div class="grid grid-cols-12 border-b border-black text-[11px]">
              <div class="col-span-6 border-r border-black">
                <div class="px-2.5 py-0.5 border-b border-black font-bold">Customer Details :</div>
                <div class="p-2.5 space-y-1 min-h-[104px]">
                  <div contenteditable="true" class="font-semibold outline-none focus:bg-yellow-50">${so.client}</div>
                  <div contenteditable="true" class="whitespace-pre-line outline-none focus:bg-yellow-50">${custAddress}</div>
                  <div class="pt-1"><span class="font-semibold">GST No :</span> <span contenteditable="true" class="font-bold uppercase outline-none focus:bg-yellow-50">${so.gstin}</span></div>
                  <div><span class="font-semibold">Phone :</span> <span contenteditable="true" class="outline-none focus:bg-yellow-50">${so.phone || ""}</span></div>
                </div>
              </div>
              <div class="col-span-6">
                <div class="px-2.5 py-0.5 border-b border-black font-bold">Shipping Address</div>
                <div class="p-2.5 space-y-1 min-h-[104px]">
                  <div contenteditable="true" class="font-semibold outline-none focus:bg-yellow-50">${shipClient}</div>
                  <div contenteditable="true" class="whitespace-pre-line outline-none focus:bg-yellow-50">${shipAddress}</div>
                  <div class="pt-1"><span class="font-semibold">Phone :</span> <span contenteditable="true" class="outline-none focus:bg-yellow-50">${shipPhone}</span></div>
                </div>
              </div>
            </div>

            <!-- Item Line Grid: sno | Description | Name | Code | QTY | Rate | Taxable Amt -->
            <table class="w-full border-collapse border-b border-black text-[11px]">
              <thead>
                <tr class="border-b border-black text-center font-bold">
                  <th class="w-[34px] py-1 px-1 border-r border-black leading-tight">sn<br>o</th>
                  <th class="py-1 px-2 border-r border-black">Description</th>
                  <th class="w-[26%] py-1 px-2 border-r border-black">Name</th>
                  <th class="w-[62px] py-1 px-1 border-r border-black">Code</th>
                  <th class="w-[74px] py-1 px-2 border-r border-black">QTY</th>
                  <th class="w-[74px] py-1 px-2 border-r border-black">Rate</th>
                  <th class="w-[96px] py-1 px-2">Taxable Amt</th>
                </tr>
              </thead>
              <tbody>
                ${rowsHtml}
              </tbody>
            </table>

            <!-- Total Qty Bar -->
            <div class="py-1 px-3 border-b border-black text-center font-bold text-[11.5px]">
              Total Qty : <span class="ml-3 font-extrabold">${totalQtySum}</span>
            </div>

            <!-- Remarks, Words, Terms & Tax Totals Box -->
            <div class="grid grid-cols-12 border-b border-black text-[10.5px]">
              <div class="col-span-8 border-r border-black flex flex-col justify-between">
                <div class="px-2.5 py-1.5 border-b border-black">
                  <span class="font-bold">Remarks :</span> <span contenteditable="true" class="outline-none focus:bg-yellow-50">${so.remarks || ""}</span>
                </div>
                <div class="px-2.5 py-1.5 border-b border-black">
                  <div class="font-semibold">Invoice Value (In Words)</div>
                  <div contenteditable="true" class="font-bold mt-0.5 outline-none focus:bg-yellow-50">${amountWords}</div>
                </div>
                <div class="px-2.5 py-1.5 space-y-0.5">
                  <div class="font-bold">Terms and Conditions :</div>
                  <div>1. 100 % Advance , Delivery Of Goods Within 8 days</div>
                  <div>2. Goods once sold can not be returned back or exchanged.</div>
                  <div>3. Our responsiblities ceases as soon as goods leave our premses.</div>
                  <div>4. Subject to 36-Telangana Jurisdiction</div>
                </div>
              </div>

              <div class="col-span-4 flex flex-col justify-between">
                <div class="p-2.5 space-y-1.5">
                  <div class="flex justify-between items-start gap-1">
                    <span class="font-semibold leading-tight">Total Amount Before<br>Tax</span>
                    <span class="font-extrabold">${formatPlain2(taxableAmt)}</span>
                  </div>
                  ${isIntra ? `
                    <div class="flex justify-between items-center pt-1">
                      <span class="font-semibold">Tax Amount : CGST</span>
                      <span class="font-extrabold">${formatPlain2(halfTax)}</span>
                    </div>
                    <div class="flex justify-between items-center pt-1">
                      <span class="font-semibold">Tax Amount : SGST</span>
                      <span class="font-extrabold">${formatPlain2(halfTax)}</span>
                    </div>
                  ` : `
                    <div class="flex justify-between items-center pt-1">
                      <span class="font-semibold">Tax Amount : IGST</span>
                      <span class="font-extrabold">${formatPlain2(totalTax)}</span>
                    </div>
                  `}
                </div>
                <div class="px-2.5 py-2 border-t border-black flex justify-between items-center bg-slate-50">
                  <span class="font-bold">Total Amount After Tax</span>
                  <span class="font-extrabold text-[12px]">${formatPlain2(afterTaxTotal)}</span>
                </div>
              </div>
            </div>

            <!-- Bank Details & Authorised Signatory Footer -->
            <div class="grid grid-cols-12 px-2.5 py-2 text-[10.5px] items-end">
              <div class="col-span-6 space-y-0.5">
                <div><span class="font-semibold">Our Bankers:</span> <span class="font-bold">BANK OF BARODA</span></div>
                <div><span class="font-semibold">A/C No. :</span> <span class="font-bold">71700200000140</span></div>
                <div><span class="font-semibold">IFSC CODE:</span> <span class="font-bold">BARBODBSECE</span></div>
                <div><span class="font-semibold">Branch :</span> <span class="font-bold">East Marredpally</span></div>
              </div>
              <div class="col-span-6 text-right flex flex-col justify-between h-full space-y-8">
                <div class="font-bold">For, ST TRADERS ANNEXE CHEAP JACK</div>
                <div class="font-semibold">Authorised Signatory</div>
              </div>
            </div>
          </div>
          <div class="text-center text-[10px] py-1 border-t border-black/20">Page 1 of 1</div>
        </div>
      `;

      currentPrintableText = `ST TRADERS ANNEXE CHEAP JACK — SALE ORDER/ESTIMATE | SO No.: ${so.id} | SO Date: ${dispDate} | Customer: ${so.client} (GST: ${so.gstin}) | Items: ${lineItems.map(i => `${i.style} (${i.qty} @ ₹${i.rate})`).join(", ")} | Taxable Amt: ${formatPlain2(taxableAmt)} | Total After Tax: ${formatPlain2(afterTaxTotal)} (${amountWords})`;

      document.getElementById("print-preview-modal").classList.remove("hidden");
      document.getElementById("print-preview-modal").classList.add("flex");
    }

    function openNewSaleOrderModal() {
      if (!hasRight("saleOrders")) {
        showToast("Access Denied: Your role does not have Sale Order creation rights.", "warning");
        return;
      }
      const num = 3496 + state.saleOrders.length + 1;
      document.getElementById("so-id").value = `SOD-H/26-27/${num}`;
      document.getElementById("so-date").value = new Date().toISOString().split("T")[0];
      toggleInlineSoCreator("none");
      populateSaleOrderPresets();

      soDraftItems = [createDefaultSoLineItem(state.masterProducts[0] || null)];
      activeSoItemIndex = 0;

      if (state.masterClients.length > 0) {
        document.getElementById("so-client-preset").value = "0";
        applyClientPreset("0");
      }
      if (state.masterProducts.length > 0) {
        document.getElementById("so-product-preset").value = "0";
      }
      renderSoDraftItemsTable();
      document.getElementById("new-so-modal").classList.remove("hidden");
      document.getElementById("new-so-modal").classList.add("flex");
    }

    function closeModal(id) {
      const el = document.getElementById(id);
      if (!el) return;
      el.classList.add("hidden");
      el.classList.remove("flex");
      if (id === "print-preview-modal") {
        document.getElementById("cutting-slip-toolbar").classList.add("hidden");
      }
    }

    function updateSoTotal() {
      return recalcSoDocumentTotals();
    }

    function createSaleOrder(e) {
      e.preventDefault();
      const totalQty = recalcSoDocumentTotals();
      if (totalQty <= 0) {
        showToast("Enter at least 1 pair/pc across the item rows.", "warning");
        return;
      }

      const normalizedItems = soDraftItems.map(item => {
        const qty = Object.values(item.sizes || {}).reduce((a, b) => a + (Number(b) || 0), 0);
        return {
          style: (item.style || "GARMENT ITEM").trim().toUpperCase(),
          gender: item.gender || "UNISEX",
          cloth: (item.cloth || "Alaskar").trim(),
          colour: (item.colour || "White").trim(),
          collar: (item.collar || "Standard Collar").trim(),
          pattern: (item.pattern || "").trim(),
          bottomPattern: item.bottomPattern || "Nada Phyajam",
          embrDesign: item.embrDesign || "LOGO on CHEST",
          sizes: { ...item.sizes },
          qty,
          rate: Number(item.rate) || 0,
          taxable: qty * (Number(item.rate) || 0)
        };
      }).filter(x => x.qty > 0);

      const primary = normalizedItems[0];
      const mergedSizes = { "34": 0, "36": 0, "38": 0, "40": 0, "42": 0, "44": 0 };
      let totalTaxable = 0;
      normalizedItems.forEach(it => {
        totalTaxable += it.taxable;
        ["34", "36", "38", "40", "42", "44"].forEach(sz => {
          mergedSizes[sz] += Number(it.sizes[sz]) || 0;
        });
      });
      const weightedRate = totalQty > 0 ? (totalTaxable / totalQty) : primary.rate;
      const summaryStyle = normalizedItems.length > 1
        ? `${primary.style} (+${normalizedItems.length - 1} more item${normalizedItems.length > 2 ? 's' : ''})`
        : primary.style;

      const so = {
        id: document.getElementById("so-id").value.trim(),
        orderRef: (document.getElementById("so-order-ref") ? document.getElementById("so-order-ref").value.trim() : ""),
        nameCode: String(1077 + state.saleOrders.length),
        date: document.getElementById("so-date").value,
        client: document.getElementById("so-client").value.trim(),
        address: (document.getElementById("so-address") ? document.getElementById("so-address").value.trim() : "Hyderabad, Telangana"),
        shipClient: (document.getElementById("so-ship-client") ? document.getElementById("so-ship-client").value.trim() : ""),
        shipAddress: (document.getElementById("so-ship-address") ? document.getElementById("so-ship-address").value.trim() : ""),
        shipPhone: (document.getElementById("so-ship-phone") ? document.getElementById("so-ship-phone").value.trim() : ""),
        phone: (document.getElementById("so-phone") ? document.getElementById("so-phone").value.trim() : ""),
        gstin: document.getElementById("so-gstin").value.trim().toUpperCase(),
        gender: primary.gender,
        style: summaryStyle,
        items: normalizedItems,
        sizes: mergedSizes,
        totalQty,
        rate: weightedRate,
        gstPct: parseFloat(document.getElementById("so-gst-pct")?.value) || 5,
        remarks: (document.getElementById("so-remarks") ? document.getElementById("so-remarks").value.trim() : ""),
        cloth: primary.cloth,
        colour: primary.colour,
        collar: primary.collar,
        pattern: primary.pattern,
        bottomPattern: primary.bottomPattern,
        piping: "Standard Piping",
        embrDesign: primary.embrDesign,
        poCode: "STTNP-06",
        hospt: "S T Traders Cheap Jack Musheerabad",
        stage: "New Sale Order"
      };
      state.saleOrders.unshift(so);
      // Auto-learn new GSTIN -> Firm Name mapping in Master Clients if not already saved
      if (so.gstin && so.client && !so.client.startsWith("M/s Registered")) {
        const existsCli = state.masterClients.some(c => (c.gstin || "").trim().toUpperCase() === so.gstin);
        if (!existsCli) {
          state.masterClients.unshift({
            id: `CLI-${String(state.masterClients.length + 1).padStart(2, "0")}`,
            code: so.nameCode,
            name: so.client,
            gstin: so.gstin,
            category: "Hospital & Healthcare",
            contact: so.phone ? `Contact • ${so.phone}` : "Purchase Dept",
            city: so.address || "Hyderabad, Telangana",
            phone: so.phone || ""
          });
        }
      }
      saveFlowState();
      closeModal("new-so-modal");
      switchStep("sale-orders");
      showToast(`Sale Order ${so.id} booked (${normalizedItems.length} item row(s), ${totalQty} pcs).`, "success");
      openSaleOrderPrint(so.id);
    }

    function generateCuttingSlipFromSo(soId) {
      const so = state.saleOrders.find(x => x.id === soId);
      if (!so) return;
      const slipId = `CS-${so.id.split("/").pop()}`;
      const meters = Math.ceil(so.totalQty * 2.25);
      state.cuttingSlips.unshift({
        slipId,
        soId: so.id,
        metersIssued: meters,
        fabricReleased: false,
        status: "Ready for Tailor Allocation"
      });
      so.stage = "Cutting Slip Generated";
      saveFlowState();
      switchStep("cutting-slips");
      showToast(`Cutting Slip ${slipId} generated for ${so.id}.`, "success");
    }

    // =========================================================================
    // RENDER STEP 2: CUTTING SLIPS (EXACT TWO-COLUMN SLIP + GARMENT PREVIEW)
    // =========================================================================
    function renderCuttingSlips() {
      const tbody = document.getElementById("cutting-slips-tbody");
      tbody.innerHTML = state.cuttingSlips.map(cs => {
        const so = state.saleOrders.find(x => x.id === cs.soId) || {};
        const ratio = formatSizeRatio(so.sizes);
        return `
          <tr class="hover:bg-slate-50 transition">
            <td class="py-3.5 px-4">
              <div class="font-extrabold text-slate-900 text-xs">${cs.slipId}</div>
              <div class="text-[11px] text-indigo-700 font-semibold">SNo: ${cs.soId}</div>
            </td>
            <td class="py-3.5 px-4">
              <div class="font-bold text-slate-900 text-xs">${so.style || ''} (${so.gender || ''})</div>
              <div class="text-[11px] text-slate-500">Collar: ${so.collar || ''} • ${so.pattern || ''}</div>
            </td>
            <td class="py-3.5 px-4 text-xs">
              <div class="font-bold text-slate-800">${so.cloth || ''} (${so.colour || ''})</div>
              <div class="text-[11px] text-slate-500">Req: <strong>${cs.metersIssued} m</strong> ${cs.fabricReleased ? '(Fabric Deducted ✓)' : ''}</div>
            </td>
            <td class="py-3.5 px-4 text-xs">
              <div class="font-bold text-slate-900">${so.totalQty || 0} Pairs</div>
              <div class="text-[11px] text-slate-500">SIZE: ${ratio}</div>
            </td>
            <td class="py-3.5 px-4">
              <span class="px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-50 text-amber-800 border border-amber-200">${cs.status}</span>
            </td>
            <td class="py-3.5 px-4 text-right">
              <div class="flex flex-wrap justify-end gap-1.5">
                <button onclick="openCuttingSlipPreview('${cs.slipId}')" class="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition">
                  Print Cutting Slip + Photo
                </button>
                ${!cs.fabricReleased ? `
                  <button onclick="issueFabricForSlip('${cs.slipId}')" class="px-2.5 py-1.5 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 text-xs font-semibold">
                    Issue ${cs.metersIssued}m Cloth
                  </button>
                ` : ''}
                <button onclick="goToAllocateSlip('${cs.slipId}')" class="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition">
                  Allocate to Tailor →
                </button>
              </div>
            </td>
          </tr>
        `;
      }).join("");

      document.getElementById("fabric-mini-grid").innerHTML = state.fabrics.map(f => `
        <div class="p-3 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between">
          <div>
            <div class="text-xs font-bold text-slate-800">${f.name}</div>
            <div class="text-[11px] text-slate-500">Rate: ₹${f.rate}/m</div>
          </div>
          <span class="text-sm font-extrabold ${f.stock < 400 ? 'text-rose-600' : 'text-emerald-700'}">${f.stock} m</span>
        </div>
      `).join("");
    }

    function issueFabricForSlip(slipId) {
      const cs = state.cuttingSlips.find(x => x.slipId === slipId);
      if (!cs || cs.fabricReleased) return;
      const so = state.saleOrders.find(x => x.id === cs.soId);
      const fab = state.fabrics.find(f => so && f.name.toLowerCase().includes(so.cloth.toLowerCase().split(" ")[0])) || state.fabrics[0];
      if (fab.stock < cs.metersIssued) {
        showToast(`Low stock on ${fab.name}!`, "warning");
        return;
      }
      fab.stock -= cs.metersIssued;
      cs.fabricReleased = true;
      saveFlowState();
      showToast(`Issued ${cs.metersIssued}m of ${fab.name} to Cutting Table.`, "success");
    }

    function goToAllocateSlip(slipId) {
      switchStep("allocation");
      const sel = document.getElementById("alloc-slip-select");
      if (sel) sel.value = slipId;
    }

    function getGarmentIllustrationSvg(style) {
      const s = (style || "").toLowerCase();
      if (s.includes("bedsheet") || s.includes("pillow") || s.includes("bed sheet")) {
        return `
          <svg viewBox="0 0 260 360" class="w-full max-h-[360px] mx-auto">
            <rect x="20" y="30" width="220" height="300" rx="14" fill="#f8fafc" stroke="#94a3b8" stroke-width="2"/>
            <rect x="38" y="48" width="184" height="58" rx="10" fill="#e2e8f0" stroke="#64748b" stroke-width="2"/>
            <rect x="38" y="118" width="184" height="192" rx="8" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/>
            <text x="130" y="82" text-anchor="middle" font-size="11" font-weight="700" fill="#334155">PILLOW COVER</text>
            <text x="130" y="218" text-anchor="middle" font-size="13" font-weight="800" fill="#1e3a8a">ROYAL BLUE BEDSHEET</text>
          </svg>`;
      }
      const isBlue = s.includes("pacifica") || s.includes("blue");
      const fillMain = isBlue ? "#dbeafe" : "#ffffff";
      const strokeMain = isBlue ? "#1E77B4" : "#1e293b";
      return `
        <svg viewBox="0 0 260 390" class="w-full max-h-[380px] mx-auto">
          <path d="M104 36 L130 56 L156 36 L146 26 L130 38 L114 26 Z" fill="${fillMain}" stroke="${strokeMain}" stroke-width="2.2"/>
          <path d="M104 36 L58 58 L46 112 L78 120 L84 86 L84 205 L176 205 L176 86 L182 120 L214 112 L202 58 L156 36 L130 56 Z" fill="${fillMain}" stroke="${strokeMain}" stroke-width="2.2" stroke-linejoin="round"/>
          <line x1="130" y1="56" x2="130" y2="205" stroke="${strokeMain}" stroke-width="1.8"/>
          <circle cx="130" cy="76" r="2.5" fill="${strokeMain}"/>
          <circle cx="130" cy="102" r="2.5" fill="${strokeMain}"/>
          <circle cx="130" cy="128" r="2.5" fill="${strokeMain}"/>
          <circle cx="130" cy="154" r="2.5" fill="${strokeMain}"/>
          <line x1="104" y1="44" x2="104" y2="145" stroke="${strokeMain}" stroke-width="1.1" stroke-dasharray="3 2"/>
          <line x1="110" y1="48" x2="110" y2="145" stroke="${strokeMain}" stroke-width="1.1" stroke-dasharray="3 2"/>
          <line x1="150" y1="48" x2="150" y2="145" stroke="${strokeMain}" stroke-width="1.1" stroke-dasharray="3 2"/>
          <line x1="156" y1="44" x2="156" y2="145" stroke="${strokeMain}" stroke-width="1.1" stroke-dasharray="3 2"/>
          <rect x="91" y="152" width="30" height="36" rx="4" fill="${fillMain}" stroke="${strokeMain}" stroke-width="1.8"/>
          <rect x="139" y="152" width="30" height="36" rx="4" fill="${fillMain}" stroke="${strokeMain}" stroke-width="1.8"/>
          <rect x="143" y="76" width="22" height="12" rx="2" fill="#e0e7ff" stroke="#4338ca" stroke-width="1.2"/>
          <text x="154" y="84" text-anchor="middle" font-size="6.5" font-weight="800" fill="#312e81">LOGO</text>
          <path d="M88 205 L172 205 L178 368 L142 368 L130 256 L118 368 L82 368 Z" fill="${fillMain}" stroke="${strokeMain}" stroke-width="2.2" stroke-linejoin="round"/>
        </svg>`;
    }

    function uploadCuttingSlipImage(e) {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = function(evt) {
        document.querySelectorAll(".cutting-slip-image-box").forEach(box => {
          box.innerHTML = `<img src="${evt.target.result}" alt="Garment Preview" class="max-h-[240px] w-auto mx-auto object-contain">`;
        });
        showToast("Garment photo updated on both Up & Down slips of this single A4 sheet.", "success");
      };
      reader.readAsDataURL(file);
    }

    function syncDualSlipField(fieldClass, value) {
      document.querySelectorAll(`.${fieldClass}`).forEach(el => {
        if (document.activeElement !== el) {
          el.textContent = value;
        }
      });
    }

    function updateSlipUnitMaster() {
      const unitVal = document.getElementById("slip-unit-quick").value;
      const masterVal = document.getElementById("slip-master-quick").value;
      syncDualSlipField("slip-field-unit", unitVal);
      syncDualSlipField("slip-field-master", masterVal);
    }

    function saveEditedCuttingSlip() {
      const cs = state.cuttingSlips.find(x => x.slipId === activeCuttingSlipId);
      if (!cs) return;
      const so = state.saleOrders.find(x => x.id === cs.soId);
      if (!so) return;

      const getVal = (cls, fallback) => {
        const el = document.querySelector(`.${cls}`);
        return el ? el.textContent.trim() : fallback;
      };

      so.nameCode = getVal("slip-field-namecode", so.nameCode);
      so.gender = getVal("slip-field-gender", so.gender);
      so.style = getVal("slip-field-style", so.style);
      so.cloth = getVal("slip-field-cloth", so.cloth);
      so.colour = getVal("slip-field-colour", so.colour);
      so.collar = getVal("slip-field-collar", so.collar);
      so.pattern = getVal("slip-field-pattern", so.pattern);
      so.bottomPattern = getVal("slip-field-bottom", so.bottomPattern);
      so.piping = getVal("slip-field-piping", so.piping);
      so.embrDesign = getVal("slip-field-embr", so.embrDesign);
      so.poCode = getVal("slip-field-po", so.poCode);
      so.hospt = getVal("slip-field-hospt", so.hospt);

      cs.unitName = getVal("slip-field-unit", cs.unitName || "Cherlapally Unit — Line A");
      cs.masterName = getVal("slip-field-master", cs.masterName || "Mohammed Riyaz (Cutting & Master)");

      saveFlowState();
      showToast(`Saved manual edits for both copies of Cutting Slip ${cs.slipId}.`, "success");
    }

    function buildSingleCuttingSlipCopyHtml(slotLabel, so, cs, dispDate, sizeRatio, unitName, masterName) {
      return `
        <div class="cutting-copy-block">
          <div class="flex items-center justify-between text-[11px] font-extrabold uppercase tracking-wider text-slate-700 mb-1">
            <span>${slotLabel}</span>
            <span>SLIP NO: ${cs.slipId}</span>
          </div>
          <div class="cutting-slip-grid grid grid-cols-1 md:grid-cols-12 gap-2.5 items-stretch font-sans text-black">
            <div class="cutting-slip-left md:col-span-7 border-2 border-black p-3 flex flex-col justify-between bg-white text-[13.5px] leading-snug">
              <div class="space-y-1.5">
                <div class="grid grid-cols-12 items-baseline">
                  <div class="col-span-5"><span class="font-bold">Date</span> <span contenteditable="true" oninput="syncDualSlipField('slip-field-date', this.textContent)" class="slip-field-date font-extrabold ml-1.5 outline-none focus:bg-yellow-50">${dispDate}</span></div>
                  <div class="col-span-3 font-bold">SNo.</div>
                  <div class="slip-field-sno col-span-4 text-right font-extrabold outline-none focus:bg-yellow-50" contenteditable="true" oninput="syncDualSlipField('slip-field-sno', this.textContent)">${so.id}</div>
                </div>
                <div class="grid grid-cols-12 items-baseline bg-slate-100 px-2 py-1 border border-black/30">
                  <div class="col-span-6"><span class="font-bold">Unit:</span> <span contenteditable="true" oninput="syncDualSlipField('slip-field-unit', this.textContent)" class="slip-field-unit font-extrabold outline-none focus:bg-yellow-50">${unitName}</span></div>
                  <div class="col-span-6 text-right"><span class="font-bold">Master:</span> <span contenteditable="true" oninput="syncDualSlipField('slip-field-master', this.textContent)" class="slip-field-master font-extrabold outline-none focus:bg-yellow-50">${masterName}</span></div>
                </div>
                <div class="grid grid-cols-12 items-baseline">
                  <div class="col-span-5"><span class="font-bold">NAME:</span> <span contenteditable="true" oninput="syncDualSlipField('slip-field-namecode', this.textContent)" class="slip-field-namecode font-extrabold ml-1 outline-none focus:bg-yellow-50">${so.nameCode || '1077'}</span></div>
                  <div class="slip-field-gender col-span-3 font-extrabold uppercase outline-none focus:bg-yellow-50" contenteditable="true" oninput="syncDualSlipField('slip-field-gender', this.textContent)">${so.gender || 'FEMALE'}</div>
                  <div class="slip-field-qty col-span-4 text-right font-extrabold outline-none focus:bg-yellow-50" contenteditable="true" oninput="syncDualSlipField('slip-field-qty', this.textContent)">(${so.totalQty}-PAIRS)</div>
                </div>
                <div class="slip-field-style font-extrabold uppercase text-[15px] tracking-wide outline-none focus:bg-yellow-50" contenteditable="true" oninput="syncDualSlipField('slip-field-style', this.textContent)">${so.style}</div>
                <div class="grid grid-cols-12 items-start">
                  <div class="col-span-2 font-bold leading-tight">Measur:</div>
                  <div class="slip-field-size col-span-10 font-extrabold text-[15px] outline-none focus:bg-yellow-50" contenteditable="true" oninput="syncDualSlipField('slip-field-size', this.textContent)">SIZE: ${sizeRatio}</div>
                </div>
                <div class="grid grid-cols-12 items-baseline">
                  <div class="col-span-2 font-bold">Spec:</div>
                  <div class="slip-field-spec col-span-10 font-bold outline-none focus:bg-yellow-50" contenteditable="true" oninput="syncDualSlipField('slip-field-spec', this.textContent)">${cs.slipId} • Client: ${so.client || ''} • Cloth Est: ${cs.metersIssued}m</div>
                </div>
                <div class="grid grid-cols-12 items-baseline">
                  <div class="col-span-2 font-bold">Cloth:</div>
                  <div class="slip-field-cloth col-span-4 font-extrabold outline-none focus:bg-yellow-50" contenteditable="true" oninput="syncDualSlipField('slip-field-cloth', this.textContent)">${so.cloth}</div>
                  <div class="col-span-2 font-bold">Colour:</div>
                  <div class="slip-field-colour col-span-4 font-extrabold outline-none focus:bg-yellow-50" contenteditable="true" oninput="syncDualSlipField('slip-field-colour', this.textContent)">${so.colour}</div>
                </div>
                <div class="grid grid-cols-12 items-baseline">
                  <div class="col-span-3 font-bold">Collar:</div>
                  <div class="slip-field-collar col-span-9 font-extrabold outline-none focus:bg-yellow-50" contenteditable="true" oninput="syncDualSlipField('slip-field-collar', this.textContent)">${so.collar}</div>
                </div>
                <div class="grid grid-cols-12 items-start">
                  <div class="col-span-3 font-bold">Pattern:</div>
                  <div class="slip-field-pattern col-span-9 font-extrabold outline-none focus:bg-yellow-50" contenteditable="true" oninput="syncDualSlipField('slip-field-pattern', this.textContent)">${so.pattern}</div>
                </div>
                <div class="grid grid-cols-12 items-baseline">
                  <div class="col-span-3 font-bold">Male Pattern:</div>
                  <div class="slip-field-bottom col-span-9 font-extrabold outline-none focus:bg-yellow-50" contenteditable="true" oninput="syncDualSlipField('slip-field-bottom', this.textContent)">${so.bottomPattern || 'Nada Phyajam'}</div>
                </div>
                <div class="grid grid-cols-12 items-baseline">
                  <div class="col-span-3 font-bold">Piping:</div>
                  <div class="slip-field-piping col-span-9 font-bold outline-none focus:bg-yellow-50" contenteditable="true" oninput="syncDualSlipField('slip-field-piping', this.textContent)">${so.piping || ''}</div>
                </div>
                <div class="grid grid-cols-12 items-start">
                  <div class="col-span-2 font-bold leading-tight">Embr Desgn:</div>
                  <div class="slip-field-embr col-span-10 font-extrabold outline-none focus:bg-yellow-50" contenteditable="true" oninput="syncDualSlipField('slip-field-embr', this.textContent)">${so.embrDesign}</div>
                </div>
              </div>
              <div class="pt-2 mt-2 border-t border-black/20 space-y-1">
                <div class="grid grid-cols-12 items-baseline">
                  <div class="col-span-8"><span class="font-bold">PO:</span> <span class="slip-field-po font-extrabold outline-none focus:bg-yellow-50" contenteditable="true" oninput="syncDualSlipField('slip-field-po', this.textContent)">${so.poCode || 'STTNP-06'}</span></div>
                  <div class="col-span-4 text-right font-semibold text-slate-800">Master Sign: _______</div>
                </div>
                <div class="flex items-baseline gap-2">
                  <span class="font-bold">Hospt:</span>
                  <span class="slip-field-hospt font-extrabold outline-none focus:bg-yellow-50" contenteditable="true" oninput="syncDualSlipField('slip-field-hospt', this.textContent)">${so.hospt || 'S T Traders Cheap Jack Musheerabad'}</span>
                </div>
              </div>
            </div>
            <div class="cutting-slip-right md:col-span-5 border-2 border-black p-2 flex flex-col items-center justify-center bg-white min-h-[260px]">
              <div class="cutting-slip-image-box w-full flex items-center justify-center">
                ${getGarmentIllustrationSvg(so.style)}
              </div>
            </div>
          </div>
        </div>
      `;
    }

    function openCuttingSlipPreview(slipId) {
      const cs = state.cuttingSlips.find(x => x.slipId === slipId);
      if (!cs) return;
      activeCuttingSlipId = slipId;
      const so = state.saleOrders.find(x => x.id === cs.soId) || {};
      const alloc = state.allocations.find(a => a.slipId === slipId || a.soId === cs.soId);
      const unitName = cs.unitName || (alloc ? alloc.unit : "Cherlapally Unit — Line A");
      const masterName = cs.masterName || (alloc ? alloc.tailor : "Mohammed Riyaz (Cutting & Master)");
      const sizeRatio = formatSizeRatio(so.sizes);
      const dispDate = (so.date || "").split("-").reverse().join("/");

      const unitSel = document.getElementById("slip-unit-quick");
      const masterSel = document.getElementById("slip-master-quick");
      if (unitSel) {
        if (!Array.from(unitSel.options).some(o => o.value === unitName)) {
          const opt = document.createElement("option");
          opt.value = unitName;
          opt.textContent = unitName;
          unitSel.appendChild(opt);
        }
        unitSel.value = unitName;
      }
      if (masterSel) {
        if (!Array.from(masterSel.options).some(o => o.value === masterName)) {
          const opt = document.createElement("option");
          opt.value = masterName;
          opt.textContent = masterName;
          masterSel.appendChild(opt);
        }
        masterSel.value = masterName;
      }

      document.getElementById("cutting-slip-toolbar").classList.remove("hidden");
      document.getElementById("print-modal-title").textContent = `1 A4 Sheet (2 Full Slips Stacked Up & Down) — ${cs.slipId}`;

      const topSlip = buildSingleCuttingSlipCopyHtml("UPPER SLIP — CUTTING & MASTER FLOOR", so, cs, dispDate, sizeRatio, unitName, masterName);
      const bottomSlip = buildSingleCuttingSlipCopyHtml("LOWER SLIP — TAILOR & UNIT BUNDLE", so, cs, dispDate, sizeRatio, unitName, masterName);

      document.getElementById("print-area").innerHTML = `
        <div class="cutting-a4-sheet space-y-2.5">
          ${topSlip}
          <div class="border-t-2 border-dashed border-slate-500 my-0.5 relative text-center">
            <span class="bg-white px-3 text-[9px] font-bold uppercase tracking-widest text-slate-600 -top-2 relative">✂ Cut / Tear Here (1 A4 Page Only — Upper & Lower Slips)</span>
          </div>
          ${bottomSlip}
        </div>
      `;

      currentPrintableText = `Date ${dispDate} | SNo. ${so.id} | Unit: ${unitName} | Master: ${masterName} | NAME: ${so.nameCode} ${so.gender} (${so.totalQty}-PAIRS) | ${so.style} | SIZE: ${sizeRatio} | Cloth: ${so.cloth} | Colour: ${so.colour} | Collar: ${so.collar} | Pattern: ${so.pattern} | Embr Desgn: ${so.embrDesign} | Hospt: ${so.hospt}`;

      document.getElementById("print-preview-modal").classList.remove("hidden");
      document.getElementById("print-preview-modal").classList.add("flex");
    }

    // =========================================================================
    // RENDER STEP 3: ALLOCATION OF SLIPS TO TAILOR & UNIT
    // =========================================================================
    function renderAllocations() {
      const slipSel = document.getElementById("alloc-slip-select");
      slipSel.innerHTML = state.cuttingSlips.map(cs => {
        const so = state.saleOrders.find(x => x.id === cs.soId) || {};
        return `<option value="${cs.slipId}">${cs.slipId} — ${so.style || cs.soId} (${so.totalQty || 0} pcs)</option>`;
      }).join("");

      const tbody = document.getElementById("allocation-tbody");
      tbody.innerHTML = state.allocations.map(al => {
        const so = state.saleOrders.find(x => x.id === al.soId) || {};
        const pct = Math.min(100, Math.round((al.stitchedQty / al.totalQty) * 100));
        const earnedWage = al.stitchedQty * al.pieceRate;
        return `
          <tr class="hover:bg-slate-50 transition">
            <td class="py-3.5 px-4">
              <div class="font-extrabold text-slate-900 text-xs">${al.allocId} • ${al.slipId}</div>
              <div class="text-[11px] text-indigo-700 font-semibold">${al.soId}</div>
            </td>
            <td class="py-3.5 px-4">
              <div class="font-bold text-slate-800 text-xs">${al.tailor}</div>
              <div class="text-[11px] text-slate-500">${al.unit}</div>
            </td>
            <td class="py-3.5 px-4 text-xs font-semibold text-slate-800">${so.style || 'Uniform Batch'}</td>
            <td class="py-3.5 px-4 min-w-[160px]">
              <div class="flex justify-between text-xs mb-1">
                <span class="font-bold text-slate-800">${al.stitchedQty} / ${al.totalQty} pcs</span>
                <span class="text-slate-500 font-semibold">${pct}%</span>
              </div>
              <div class="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                <div class="h-full bg-indigo-600 rounded-full" style="width:${pct}%"></div>
              </div>
            </td>
            <td class="py-3.5 px-4 text-xs">
              <div class="font-extrabold text-emerald-700">${formatINR(earnedWage)}</div>
              <div class="text-[11px] text-slate-400">@ ₹${al.pieceRate}/pc</div>
            </td>
            <td class="py-3.5 px-4 text-right">
              <div class="flex flex-wrap justify-end gap-1.5">
                <button onclick="logStitchedProgress('${al.allocId}')" class="px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold">
                  + Log Stitched
                </button>
                <button onclick="sendToFinishedGoods('${al.allocId}')" class="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition">
                  Send to Receive FG →
                </button>
              </div>
            </td>
          </tr>
        `;
      }).join("");
    }

    function allocateSlipToTailor(e) {
      e.preventDefault();
      const slipId = document.getElementById("alloc-slip-select").value;
      const cs = state.cuttingSlips.find(x => x.slipId === slipId);
      if (!cs) return;
      const so = state.saleOrders.find(x => x.id === cs.soId) || { totalQty: 50 };

      const allocId = `AL-${901 + state.allocations.length}`;
      state.allocations.unshift({
        allocId,
        slipId,
        soId: cs.soId,
        unit: document.getElementById("alloc-unit-select").value,
        tailor: document.getElementById("alloc-tailor-select").value,
        totalQty: so.totalQty,
        stitchedQty: 0,
        pieceRate: parseFloat(document.getElementById("alloc-piece-rate").value) || 85,
        status: "In Stitching"
      });
      cs.status = "Allocated to Tailor";
      so.stage = "Allocated to Tailor";
      saveFlowState();
      showToast(`Allocated ${slipId} to ${document.getElementById("alloc-tailor-select").value}.`, "success");
    }

    function logStitchedProgress(allocId) {
      const al = state.allocations.find(x => x.allocId === allocId);
      if (!al) return;
      const step = Math.max(5, Math.ceil(al.totalQty * 0.25));
      al.stitchedQty = Math.min(al.totalQty, al.stitchedQty + step);
      saveFlowState();
      showToast(`Logged +${step} stitched pcs (${al.stitchedQty}/${al.totalQty}).`, "info");
    }

    function sendToFinishedGoods(allocId) {
      const al = state.allocations.find(x => x.allocId === allocId);
      if (!al) return;
      al.stitchedQty = al.totalQty;
      switchStep("receiving-fg");
      const fgSel = document.getElementById("fg-alloc-select");
      if (fgSel) fgSel.value = allocId;
      document.getElementById("fg-passed-qty").value = al.totalQty;
      document.getElementById("fg-cartons").value = Math.max(1, Math.ceil(al.totalQty / 25));
    }

    // =========================================================================
    // RENDER STEP 4: RECEIVING FINISHED GOODS
    // =========================================================================
    function renderFinishedGoods() {
      const fgSel = document.getElementById("fg-alloc-select");
      fgSel.innerHTML = state.allocations.map(al => {
        const so = state.saleOrders.find(x => x.id === al.soId) || {};
        return `<option value="${al.allocId}">${al.allocId} (${al.soId}) — ${so.style || ''} • ${al.tailor}</option>`;
      }).join("");

      const tbody = document.getElementById("fg-tbody");
      tbody.innerHTML = state.finishedGoods.map(fg => `
        <tr class="hover:bg-slate-50 transition">
          <td class="py-3.5 px-4">
            <div class="font-extrabold text-slate-900 text-xs">${fg.fgId}</div>
            <div class="text-[11px] text-slate-500">${fg.date}</div>
          </td>
          <td class="py-3.5 px-4">
            <div class="font-bold text-indigo-700 text-xs">${fg.soId}</div>
            <div class="text-xs text-slate-700">${fg.client}</div>
          </td>
          <td class="py-3.5 px-4">
            <div class="font-bold text-slate-900 text-xs">${fg.style}</div>
            <div class="text-[11px] text-slate-500">Tailor: ${fg.tailor}</div>
          </td>
          <td class="py-3.5 px-4 text-xs">
            <span class="font-extrabold text-emerald-700">${fg.passedQty} Passed</span>
            ${fg.reworkQty > 0 ? `<span class="text-rose-600 font-bold ml-1">(${fg.reworkQty} Rework)</span>` : ''}
          </td>
          <td class="py-3.5 px-4 text-xs font-bold text-slate-800">${fg.cartons} Cartons</td>
          <td class="py-3.5 px-4 text-right">
            ${!fg.invoiced ? `
              <button onclick="goToTaxInvoice('${fg.fgId}')" class="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition">
                Generate Tax Invoice →
              </button>
            ` : `
              <span class="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-bold">Invoiced ✓</span>
            `}
          </td>
        </tr>
      `).join("");
    }

    function receiveFinishedGoods(e) {
      e.preventDefault();
      const allocId = document.getElementById("fg-alloc-select").value;
      const al = state.allocations.find(x => x.allocId === allocId);
      if (!al) return;
      const so = state.saleOrders.find(x => x.id === al.soId) || {};

      const passedQty = parseInt(document.getElementById("fg-passed-qty").value) || 0;
      const reworkQty = parseInt(document.getElementById("fg-rework-qty").value) || 0;
      const cartons = parseInt(document.getElementById("fg-cartons").value) || 1;

      const fgId = `FG-${501 + state.finishedGoods.length}`;
      state.finishedGoods.unshift({
        fgId,
        allocId: al.allocId,
        soId: al.soId,
        client: so.client || "Hospital Client",
        gstin: so.gstin || "36AAACY4912K1Z2",
        style: so.style || "Finished Garment Batch",
        tailor: al.tailor,
        passedQty,
        reworkQty,
        cartons,
        rate: so.rate || 685,
        date: new Date().toISOString().split("T")[0],
        invoiced: false
      });

      al.status = "Received in FG";
      if (so.id) so.stage = "Finished Goods Received";
      saveFlowState();
      showToast(`Received ${passedQty} passed pcs into Finished Goods (${fgId}).`, "success");
    }

    function goToTaxInvoice(fgId) {
      switchStep("tax-invoice");
      const sel = document.getElementById("inv-fg-select");
      if (sel) sel.value = fgId;
      previewInvoiceTotals();
    }

    // =========================================================================
    // RENDER STEP 5: TAX INVOICE (GST & TALLYPRIME EXPORT)
    // =========================================================================
    function renderTaxInvoices() {
      const invSel = document.getElementById("inv-fg-select");
      invSel.innerHTML = state.finishedGoods.map(fg => {
        return `<option value="${fg.fgId}">${fg.fgId} (${fg.soId}) — ${fg.client} • ${fg.passedQty} pcs @ ₹${fg.rate}</option>`;
      }).join("");

      previewInvoiceTotals();

      const tbody = document.getElementById("invoices-tbody");
      tbody.innerHTML = state.invoices.map((inv, idx) => `
        <tr class="hover:bg-slate-50 transition">
          <td class="py-3.5 px-4">
            <div class="font-extrabold text-slate-900 text-xs">${inv.invNo}</div>
            <div class="text-[11px] text-slate-500">${inv.date} • SO: ${inv.soId}</div>
          </td>
          <td class="py-3.5 px-4">
            <div class="font-bold text-slate-800 text-xs">${inv.client}</div>
            <div class="text-[11px] font-mono text-slate-500">${inv.gstin}</div>
          </td>
          <td class="py-3.5 px-4 text-xs">
            <div class="font-semibold text-slate-800">${inv.style}</div>
            <div class="text-[11px] text-slate-500">HSN ${inv.hsn} • ${inv.qty} pcs @ ₹${inv.rate}</div>
          </td>
          <td class="py-3.5 px-4 text-xs">
            <div class="font-semibold text-slate-700">Taxable: ${formatINR2(inv.taxable)}</div>
            <div class="text-[11px] text-amber-700 font-semibold">GST (${inv.gstPct}%): ${formatINR2(inv.taxAmt)}</div>
          </td>
          <td class="py-3.5 px-4 text-xs font-extrabold text-emerald-700">${formatINR2(inv.grandTotal)}</td>
          <td class="py-3.5 px-4 text-right">
            <div class="inline-flex gap-1.5">
              <button onclick="openTaxInvoicePrint(${idx})" class="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-indigo-600 text-white text-xs font-bold transition">
                Print Tax Invoice
              </button>
              <button onclick="downloadInvoiceCsv(${idx})" class="px-2.5 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-semibold">
                Tally CSV
              </button>
            </div>
          </td>
        </tr>
      `).join("");
    }

    function previewInvoiceTotals() {
      const fgId = document.getElementById("inv-fg-select").value;
      const fg = state.finishedGoods.find(x => x.fgId === fgId);
      if (!fg) {
        document.getElementById("inv-live-grand").textContent = "₹0.00";
        return;
      }
      const [, gstStr] = document.getElementById("inv-hsn-gst").value.split("|");
      const gstPct = parseFloat(gstStr) || 5;
      const taxable = fg.passedQty * fg.rate;
      const grand = taxable * (1 + gstPct / 100);
      document.getElementById("inv-live-grand").textContent = formatINR2(grand);
    }

    function createTaxInvoice(e) {
      e.preventDefault();
      const fgId = document.getElementById("inv-fg-select").value;
      const fg = state.finishedGoods.find(x => x.fgId === fgId);
      if (!fg) return;

      const [hsn, gstStr] = document.getElementById("inv-hsn-gst").value.split("|");
      const gstPct = parseFloat(gstStr) || 5;
      const taxable = fg.passedQty * fg.rate;
      const taxAmt = taxable * (gstPct / 100);
      const grandTotal = taxable + taxAmt;

      const invNo = `STC/26-27/0${416 + state.invoices.length}`;
      state.invoices.unshift({
        invNo,
        date: new Date().toISOString().split("T")[0],
        soId: fg.soId,
        client: fg.client,
        gstin: fg.gstin,
        style: fg.style,
        hsn,
        qty: fg.passedQty,
        rate: fg.rate,
        taxable,
        gstPct,
        taxAmt,
        grandTotal,
        transport: document.getElementById("inv-transport").value.trim()
      });

      fg.invoiced = true;
      const so = state.saleOrders.find(x => x.id === fg.soId);
      if (so) so.stage = "Tax Invoice Raised";

      saveFlowState();
      showToast(`GST Tax Invoice ${invNo} raised (${formatINR2(grandTotal)}).`, "success");
    }

    function openTaxInvoicePrint(idx) {
      const inv = state.invoices[idx];
      if (!inv) return;
      const isIntra = (inv.gstin || "").startsWith("36");
      const taxLine = isIntra
        ? `CGST (${inv.gstPct / 2}%): ${formatINR2(inv.taxAmt / 2)} | SGST (${inv.gstPct / 2}%): ${formatINR2(inv.taxAmt / 2)}`
        : `IGST (${inv.gstPct}%): ${formatINR2(inv.taxAmt)}`;

      document.getElementById("print-modal-title").textContent = `GST Tax Invoice — ${inv.invNo}`;
      document.getElementById("print-area").innerHTML = `
        <div class="border-2 border-slate-900 p-5 space-y-4 text-slate-900 bg-white">
          <div class="border-b-2 border-slate-900 pb-3 flex justify-between items-start">
            <div>
              <h2 class="text-lg font-extrabold">S T TRADERS ANNEXE CHEAPJACK</h2>
              <p class="text-xs text-slate-600">Musheerabad & Cherlapally Units, Hyderabad, Telangana • GSTIN: 36AAJFS8492K1Z5</p>
            </div>
            <span class="px-3 py-1 bg-slate-900 text-white text-xs font-extrabold">TAX INVOICE • ${inv.invNo}</span>
          </div>
          <div class="grid grid-cols-2 gap-3 text-xs bg-slate-50 p-3.5 rounded-lg border border-slate-200">
            <div><strong>Billed To:</strong> ${inv.client}</div>
            <div><strong>Buyer GSTIN:</strong> ${inv.gstin}</div>
            <div><strong>Invoice Date:</strong> ${inv.date}</div>
            <div><strong>Sale Order Ref:</strong> ${inv.soId}</div>
            <div class="col-span-2"><strong>Dispatch / Vehicle:</strong> ${inv.transport}</div>
          </div>
          <table class="w-full text-left border-collapse border border-slate-300 text-xs">
            <thead>
              <tr class="bg-slate-100 border-b border-slate-300 font-bold">
                <th class="p-2 border-r border-slate-300">Description of Goods</th>
                <th class="p-2 border-r border-slate-300">HSN</th>
                <th class="p-2 border-r border-slate-300 text-right">Qty</th>
                <th class="p-2 border-r border-slate-300 text-right">Rate (₹)</th>
                <th class="p-2 text-right">Taxable Value (₹)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-2 border-r border-slate-300 font-semibold">${inv.style}</td>
                <td class="p-2 border-r border-slate-300">${inv.hsn}</td>
                <td class="p-2 border-r border-slate-300 text-right">${inv.qty}</td>
                <td class="p-2 border-r border-slate-300 text-right">${formatINR2(inv.rate)}</td>
                <td class="p-2 text-right font-bold">${formatINR2(inv.taxable)}</td>
              </tr>
            </tbody>
          </table>
          <div class="flex flex-col items-end text-xs space-y-1 pt-2">
            <div>${taxLine}</div>
            <div class="text-base font-extrabold text-slate-900 pt-1 border-t border-slate-300">Grand Invoice Total: ${formatINR2(inv.grandTotal)}</div>
          </div>
          <div class="pt-6 flex justify-between text-xs text-slate-500">
            <span>Receiver's Seal & Signature</span>
            <span>For S T Traders Annexe CheapJack (Authorised Signatory)</span>
          </div>
        </div>
      `;
      currentPrintableText = `S T TRADERS ANNEXE CHEAPJACK — TAX INVOICE ${inv.invNo} | Client: ${inv.client} (${inv.gstin}) | Item: ${inv.style} | Qty: ${inv.qty} @ ₹${inv.rate} | Taxable: ${formatINR2(inv.taxable)} | ${taxLine} | Grand Total: ${formatINR2(inv.grandTotal)}`;

      document.getElementById("print-preview-modal").classList.remove("hidden");
      document.getElementById("print-preview-modal").classList.add("flex");
    }

    function downloadInvoiceCsv(idx) {
      const inv = state.invoices[idx];
      if (!inv) return;
      const rows = [
        ["Voucher Type", "Invoice No", "Date", "Party Name", "Buyer GSTIN", "HSN", "Qty", "Rate", "Taxable Value", "GST %", "GST Amount", "Grand Total"],
        ["Sales", inv.invNo, inv.date, `"${inv.client}"`, inv.gstin, inv.hsn, inv.qty, inv.rate, inv.taxable.toFixed(2), inv.gstPct, inv.taxAmt.toFixed(2), inv.grandTotal.toFixed(2)]
      ];
      const csv = rows.map(r => r.join(",")).join("\n");
      const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `TallyPrime_${inv.invNo.replace(/\//g, "-")}.csv`;
      a.click();
      URL.revokeObjectURL(url);
      showToast(`Exported TallyPrime CSV for ${inv.invNo}.`, "success");
    }

    function copyPrintText() {
      const ta = document.createElement("textarea");
      ta.value = currentPrintableText;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      showToast("Copied document text to clipboard.", "success");
    }

    function exportBackupExcel() {
      if (!hasRight("excelExport")) {
        showToast("Access Denied: Your role does not have Excel Export rights.", "warning");
        return;
      }
      if (typeof XLSX === "undefined") {
        showToast("Excel engine loading—please try again in a moment.", "warning");
        return;
      }
      const wb = XLSX.utils.book_new();

      // Sheet 1: SaleOrders (flattening size ratio columns for clean Excel editing)
      const soRows = state.saleOrders.map(so => ({
        id: so.id,
        orderRef: so.orderRef || "",
        nameCode: so.nameCode || "",
        date: so.date,
        client: so.client,
        address: so.address || "",
        phone: so.phone || "",
        gstin: so.gstin,
        gender: so.gender,
        style: so.style,
        sz_34: (so.sizes && so.sizes["34"]) || 0,
        sz_36: (so.sizes && so.sizes["36"]) || 0,
        sz_38: (so.sizes && so.sizes["38"]) || 0,
        sz_40: (so.sizes && so.sizes["40"]) || 0,
        sz_42: (so.sizes && so.sizes["42"]) || 0,
        sz_44: (so.sizes && so.sizes["44"]) || 0,
        totalQty: so.totalQty,
        rate: so.rate,
        gstPct: so.gstPct || 5,
        remarks: so.remarks || "",
        cloth: so.cloth,
        colour: so.colour,
        collar: so.collar,
        pattern: so.pattern,
        bottomPattern: so.bottomPattern || "",
        piping: so.piping || "",
        embrDesign: so.embrDesign || "",
        poCode: so.poCode || "",
        hospt: so.hospt || "",
        stage: so.stage
      }));
      XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(soRows), "SaleOrders");
      XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(state.cuttingSlips), "CuttingSlips");
      XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(state.allocations), "Allocations");
      XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(state.finishedGoods), "FinishedGoods");
      XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(state.invoices), "TaxInvoices");
      XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(state.fabrics), "Fabrics");
      XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(state.masterProducts), "Products");
      XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(state.masterClients), "Clients");
      const usrRows = state.users.map(u => ({
        id: u.id, name: u.name, login: u.login, pin: u.pin, role: u.role, unit: u.unit, active: u.active,
        ...u.rights
      }));
      XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(usrRows), "UsersAndRights");

      const fileName = `ST_Traders_ERP_Backup_${new Date().toISOString().split("T")[0]}.xlsx`;
      XLSX.writeFile(wb, fileName);
      showToast(`Exported multi-sheet Excel workbook (${fileName}).`, "success");
    }

    function importBackupExcel(e) {
      const file = e.target.files[0];
      if (!file) return;
      if (typeof XLSX === "undefined") {
        showToast("Excel library not loaded yet.", "warning");
        return;
      }
      const reader = new FileReader();
      reader.onload = function(evt) {
        try {
          const data = new Uint8Array(evt.target.result);
          const wb = XLSX.read(data, { type: "array" });

          const readSheet = (name) => wb.Sheets[name] ? XLSX.utils.sheet_to_json(wb.Sheets[name]) : null;

          const rawSo = readSheet("SaleOrders");
          if (rawSo && rawSo.length > 0) {
            state.saleOrders = rawSo.map(r => {
              const sizes = {
                "34": Number(r.sz_34) || 0,
                "36": Number(r.sz_36) || 0,
                "38": Number(r.sz_38) || 0,
                "40": Number(r.sz_40) || 0,
                "42": Number(r.sz_42) || 0,
                "44": Number(r.sz_44) || 0
              };
              const calcTotal = Object.values(sizes).reduce((a, b) => a + b, 0);
              return {
                id: String(r.id || ""),
                orderRef: String(r.orderRef || ""),
                nameCode: String(r.nameCode || ""),
                date: String(r.date || ""),
                client: String(r.client || ""),
                address: String(r.address || ""),
                phone: String(r.phone || ""),
                gstin: String(r.gstin || ""),
                gender: String(r.gender || "UNISEX"),
                style: String(r.style || ""),
                sizes,
                totalQty: Number(r.totalQty) || calcTotal,
                rate: Number(r.rate) || 0,
                gstPct: Number(r.gstPct) || 5,
                remarks: String(r.remarks || ""),
                cloth: String(r.cloth || ""),
                colour: String(r.colour || ""),
                collar: String(r.collar || ""),
                pattern: String(r.pattern || ""),
                bottomPattern: String(r.bottomPattern || "Nada Phyajam"),
                piping: String(r.piping || ""),
                embrDesign: String(r.embrDesign || ""),
                poCode: String(r.poCode || "STTNP-06"),
                hospt: String(r.hospt || "S T Traders Cheap Jack Musheerabad"),
                stage: String(r.stage || "New Sale Order")
              };
            });
          }

          const rawCut = readSheet("CuttingSlips");
          if (rawCut) state.cuttingSlips = rawCut.map(r => ({ ...r, metersIssued: Number(r.metersIssued) || 0, fabricReleased: Boolean(r.fabricReleased) }));

          const rawAlloc = readSheet("Allocations");
          if (rawAlloc) state.allocations = rawAlloc.map(r => ({ ...r, totalQty: Number(r.totalQty) || 0, stitchedQty: Number(r.stitchedQty) || 0, pieceRate: Number(r.pieceRate) || 0 }));

          const rawFg = readSheet("FinishedGoods");
          if (rawFg) state.finishedGoods = rawFg.map(r => ({ ...r, passedQty: Number(r.passedQty) || 0, reworkQty: Number(r.reworkQty) || 0, cartons: Number(r.cartons) || 1, rate: Number(r.rate) || 0, invoiced: Boolean(r.invoiced) }));

          const rawInv = readSheet("TaxInvoices");
          if (rawInv) state.invoices = rawInv.map(r => ({ ...r, qty: Number(r.qty) || 0, rate: Number(r.rate) || 0, taxable: Number(r.taxable) || 0, gstPct: Number(r.gstPct) || 5, taxAmt: Number(r.taxAmt) || 0, grandTotal: Number(r.grandTotal) || 0 }));

          const rawFab = readSheet("Fabrics");
          if (rawFab && rawFab.length > 0) state.fabrics = rawFab.map(r => ({ name: String(r.name || ""), stock: Number(r.stock) || 0, rate: Number(r.rate) || 0 }));

          const rawProd = readSheet("Products");
          if (rawProd && rawProd.length > 0) state.masterProducts = rawProd.map(r => ({ ...r, rate: Number(r.rate) || 0 }));

          const rawCli = readSheet("Clients");
          if (rawCli && rawCli.length > 0) state.masterClients = rawCli;

          saveFlowState();
          showToast("Excel (.xlsx) workbook imported & synced across all modules!", "success");
        } catch (err) {
          showToast("Could not read Excel file. Please use an exported .xlsx template.", "warning");
        }
        e.target.value = "";
      };
      reader.readAsArrayBuffer(file);
    }

    const ROLE_PRESETS = {
      "Admin": { saleOrders: true, cuttingSlips: true, allocation: true, receivingFg: true, taxInvoice: true, mastersReports: true, excelExport: true, manageUsers: true },
      "Sales & Billing": { saleOrders: true, cuttingSlips: false, allocation: false, receivingFg: true, taxInvoice: true, mastersReports: true, excelExport: true, manageUsers: false },
      "Cutting Master": { saleOrders: false, cuttingSlips: true, allocation: true, receivingFg: false, taxInvoice: false, mastersReports: false, excelExport: false, manageUsers: false },
      "Floor Supervisor": { saleOrders: false, cuttingSlips: true, allocation: true, receivingFg: true, taxInvoice: false, mastersReports: false, excelExport: false, manageUsers: false },
      "Accounts & MIS": { saleOrders: false, cuttingSlips: false, allocation: false, receivingFg: false, taxInvoice: true, mastersReports: true, excelExport: true, manageUsers: false }
    };

    function applyRbacUiRestrictions() {
      const u = getActiveUser();
      const switcher = document.getElementById("active-user-switcher");
      if (switcher) {
        switcher.innerHTML = state.users.filter(x => x.active).map(usr =>
          `<option value="${usr.id}" ${usr.id === u.id ? "selected" : ""}>${usr.name} (${usr.role})</option>`
        ).join("");
      }
      const subUsers = document.getElementById("step-sub-users");
      if (subUsers) subUsers.textContent = `${u.name.split(" ")[0]} • ${u.role}`;

      const banner = document.getElementById("users-active-banner");
      if (banner) banner.textContent = `Active Session: ${u.name} • ${u.role} (${u.unit})`;

      // Dim restricted sidebar items visually so staff immediately see permitted vs locked modules
      document.querySelectorAll(".step-card").forEach(card => {
        const step = card.dataset.step;
        const reqRight = STEP_RIGHT_MAP[step];
        if (reqRight && !hasRight(reqRight)) {
          card.classList.add("opacity-45");
          card.title = "Restricted by Role Rights";
        } else {
          card.classList.remove("opacity-45");
          card.title = "";
        }
      });

      // Disable Book New Sale Order CTA if user lacks saleOrders right
      document.querySelectorAll("button[onclick*='openNewSaleOrderModal']").forEach(btn => {
        if (!hasRight("saleOrders")) {
          btn.classList.add("opacity-50", "cursor-not-allowed");
        } else {
          btn.classList.remove("opacity-50", "cursor-not-allowed");
        }
      });
    }

    function switchActiveUser(userId) {
      const target = state.users.find(u => u.id === userId);
      if (!target) return;
      state.activeUserId = target.id;
      saveFlowState();
      showToast(`Switched active session to ${target.name} (${target.role}).`, "info");
      const currentHash = window.location.hash.replace("#", "").trim() || "dashboard";
      const reqRight = STEP_RIGHT_MAP[currentHash];
      if (reqRight && !hasRight(reqRight)) {
        switchStep("dashboard");
      }
    }

    function openPinUnlockModal() {
      const sel = document.getElementById("pin-modal-user-select");
      if (sel) {
        sel.innerHTML = state.users.filter(u => u.active).map(u =>
          `<option value="${u.id}" ${u.id === state.activeUserId ? "selected" : ""}>${u.name} — ${u.role}</option>`
        ).join("");
      }
      document.getElementById("pin-modal-input").value = "";
      document.getElementById("pin-modal").classList.remove("hidden");
      document.getElementById("pin-modal").classList.add("flex");
    }

    function verifyAndActivateUserPin(e) {
      e.preventDefault();
      const userId = document.getElementById("pin-modal-user-select").value;
      const pinVal = document.getElementById("pin-modal-input").value.trim();
      const target = state.users.find(u => u.id === userId);
      if (!target) return;
      if (target.pin !== pinVal) {
        showToast("Invalid 4-digit PIN. Please try again.", "warning");
        return;
      }
      state.activeUserId = target.id;
      saveFlowState();
      closeModal("pin-modal");
      showToast(`PIN verified! Logged in as ${target.name} (${target.role}).`, "success");
    }

    function renderUsersAndRights() {
      const tbody = document.getElementById("users-list-tbody");
      const matrixBody = document.getElementById("rights-matrix-tbody");
      const countBadge = document.getElementById("users-count-badge");
      if (!tbody || !matrixBody) return;

      if (countBadge) countBadge.textContent = `${state.users.length} users`;

      tbody.innerHTML = state.users.map((u, idx) => `
        <tr class="hover:bg-slate-50">
          <td class="py-3 px-4">
            <div class="font-bold text-slate-900">${u.name} ${u.id === state.activeUserId ? '<span class="ml-1 px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px]">Current</span>' : ''}</div>
            <div class="text-[11px] font-mono text-slate-500">@${u.login}</div>
          </td>
          <td class="py-3 px-4">
            <div class="font-bold text-indigo-700">${u.role}</div>
            <div class="text-[11px] text-slate-500">${u.unit}</div>
          </td>
          <td class="py-3 px-4 font-mono font-bold text-slate-700">${u.pin}</td>
          <td class="py-3 px-4">
            <span class="px-2 py-0.5 rounded-full text-[11px] font-bold ${u.active ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-500'}">${u.active ? 'Active' : 'Disabled'}</span>
          </td>
          <td class="py-3 px-4 text-right">
            <div class="inline-flex gap-1.5">
              <button onclick="switchActiveUser('${u.id}')" class="px-2.5 py-1 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold">
                Use Login
              </button>
              ${u.id !== "USR-01" ? `
                <button onclick="toggleUserActive(${idx})" class="px-2 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold">
                  ${u.active ? 'Disable' : 'Enable'}
                </button>
                <button onclick="deleteSystemUser(${idx})" class="px-2 py-1 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-600 font-bold">
                  ✕
                </button>
              ` : ''}
            </div>
          </td>
        </tr>
      `).join("");

      const rightKeys = ["saleOrders", "cuttingSlips", "allocation", "receivingFg", "taxInvoice", "mastersReports", "excelExport", "manageUsers"];
      matrixBody.innerHTML = state.users.map((u, idx) => `
        <tr class="hover:bg-slate-50">
          <td class="py-2.5 px-3 text-left">
            <div class="font-bold text-slate-900">${u.name}</div>
            <div class="text-[10px] font-semibold text-slate-500">${u.role}</div>
          </td>
          ${rightKeys.map(rk => `
            <td class="py-2.5 px-2">
              <input type="checkbox" ${u.rights[rk] ? "checked" : ""} ${u.id === "USR-01" && rk === "manageUsers" ? "disabled" : ""} onchange="toggleUserRight(${idx}, '${rk}', this.checked)" class="w-4 h-4 rounded accent-indigo-600 cursor-pointer">
            </td>
          `).join("")}
        </tr>
      `).join("");
    }

    function addSystemUser(e) {
      e.preventDefault();
      if (!hasRight("manageUsers")) {
        showToast("Only Admin / Users Manager can add staff accounts.", "warning");
        return;
      }
      const role = document.getElementById("usr-role").value;
      const preset = ROLE_PRESETS[role] || ROLE_PRESETS["Floor Supervisor"];
      const newUsr = {
        id: `USR-${String(state.users.length + 1).padStart(2, "0")}`,
        name: document.getElementById("usr-name").value.trim(),
        login: document.getElementById("usr-login").value.trim().toLowerCase(),
        pin: document.getElementById("usr-pin").value.trim() || "1234",
        role,
        unit: document.getElementById("usr-unit").value,
        active: true,
        rights: JSON.parse(JSON.stringify(preset))
      };
      state.users.push(newUsr);
      saveFlowState();
      document.getElementById("usr-name").value = "";
      document.getElementById("usr-login").value = "";
      showToast(`Created user "${newUsr.name}" with ${role} rights.`, "success");
    }

    function toggleUserRight(userIdx, rightKey, checked) {
      if (!hasRight("manageUsers")) {
        showToast("Permission denied to modify rights.", "warning");
        renderUsersAndRights();
        return;
      }
      if (state.users[userIdx]) {
        state.users[userIdx].rights[rightKey] = checked;
        saveFlowState();
      }
    }

    function toggleUserActive(userIdx) {
      if (!hasRight("manageUsers")) return;
      state.users[userIdx].active = !state.users[userIdx].active;
      saveFlowState();
    }

    function deleteSystemUser(userIdx) {
      if (!hasRight("manageUsers")) return;
      state.users.splice(userIdx, 1);
      saveFlowState();
      showToast("Removed staff user account.", "info");
    }

    function updateStepperBadges() {
      const fgTotalPcs = state.finishedGoods.reduce((s, f) => s + f.passedQty, 0);
      document.getElementById("step-sub-masters").textContent = `${state.masterProducts.length} items • ${state.masterClients.length} clients`;

      document.getElementById("badge-step-4").textContent = state.saleOrders.length;
      document.getElementById("step-sub-so").textContent = `${state.saleOrders.length} active orders`;

      document.getElementById("badge-step-5").textContent = state.cuttingSlips.length;
      document.getElementById("step-sub-cut").textContent = `${state.cuttingSlips.length} slips`;

      document.getElementById("badge-step-6").textContent = state.allocations.length;
      document.getElementById("step-sub-alloc").textContent = `${state.allocations.length} tailor runs`;

      document.getElementById("badge-step-7").textContent = state.finishedGoods.length;
      document.getElementById("step-sub-fg").textContent = `${fgTotalPcs} pcs in store`;

      document.getElementById("badge-step-8").textContent = state.invoices.length;
      document.getElementById("step-sub-inv").textContent = `${state.invoices.length} invoices`;
    }

    function renderAllSteps() {
      applyRbacUiRestrictions();
      updateStepperBadges();
      renderUsersAndRights();
      renderDashboardOverview();
      renderTrackingPage();
      renderMastersPage();
      renderReportsPage();
      renderSaleOrders();
      renderCuttingSlips();
      renderAllocations();
      renderFinishedGoods();
      renderTaxInvoices();
    }

    window.addEventListener("DOMContentLoaded", () => {
      renderAllSteps();
      const hash = window.location.hash.replace("#", "").trim();
      if (["dashboard", "tracking", "masters", "reports", "users", "sale-orders", "cutting-slips", "allocation", "receiving-fg", "tax-invoice"].includes(hash)) {
        switchStep(hash);
      } else {
        switchStep("dashboard");
      }
    });
