import os

# Define the list of files to include
files_to_read = [
    # 1. Configuration Files
    "package.json",
    "tsconfig.json",
    "tsconfig.app.json",
    "tailwind.config.ts",
    "vite.config.ts",
    "components.json",
    "postcss.config.js",

    # 2. Entry Points (Note: index.html is usually at root in Vite)
    "src/main.tsx",
    "src/App.tsx",
    "index.html", 

    # 3. Page Components
    "src/pages/Index.tsx",
    "src/pages/Register.tsx",
    "src/pages/About.tsx",
    "src/pages/Schedule.tsx",
    "src/pages/Sponsors.tsx",
    "src/pages/Prizes.tsx",
    "src/pages/FAQ.tsx",
    "src/pages/Team.tsx",

    # 4. Layout Components
    "src/components/layout/Layout.tsx",
    "src/components/layout/Navbar.tsx",
    "src/components/layout/Footer.tsx",

    # 5. Home Components
    "src/components/home/HeroSection.tsx",
    "src/components/home/CountdownTimer.tsx",
    "src/components/home/WhyJoinSection.tsx",

    # 6. Integration Files
    "src/integrations/supabase/client.ts",
    "src/integrations/supabase/types.ts",
    "src/lib/google-sheets.ts",

    # 7. Environment/Setup Files
    "README.md",
    "GOOGLE_SHEETS_SETUP.md",
    "TEAM_AUTH_SETUP.md",
    ".env",
    
    # Optional/Helpful
    "src/lib/utils.ts",
    "src/vite-env.d.ts",
    "src/test/example.test.ts" 
]

output_filename = "FULL_CODEBASE.md"
project_root = "/Users/kd/Desktop/HackSnippet_v2"

with open(output_filename, "w", encoding="utf-8") as outfile:
    outfile.write("# Full Codebase Dump\n\n")
    outfile.write("This file contains the contents of key project files.\n\n")

    for relative_path in files_to_read:
        file_path = os.path.join(project_root, relative_path)
        
        # Handle cases where user might have specified src/index.html but it's at root
        if not os.path.exists(file_path):
             # Try alternatives
             if relative_path == "src/index.html" and os.path.exists(os.path.join(project_root, "index.html")):
                 file_path = os.path.join(project_root, "index.html")
                 relative_path = "index.html"
        
        outfile.write(f"## File: {relative_path}\n\n")
        
        if os.path.exists(file_path):
            try:
                # Determine extension for syntax highlighting
                _, ext = os.path.splitext(relative_path)
                lang = ext.lstrip(".").lower()
                if lang == "ts" or lang == "tsx":
                    lang = "typescript"
                elif lang == "js" or lang == "jsx":
                    lang = "javascript"
                elif lang == "json":
                    lang = "json"
                elif lang == "html":
                    lang = "html"
                elif lang == "css":
                    lang = "css"
                elif lang == "md":
                    lang = "markdown"
                else:
                    lang = ""

                with open(file_path, "r", encoding="utf-8") as infile:
                    content = infile.read()
                    outfile.write(f"```{lang}\n")
                    outfile.write(content)
                    outfile.write("\n```\n\n")
            except Exception as e:
                outfile.write(f"> Error reading file: {e}\n\n")
        else:
            outfile.write("> File not found.\n\n")

print(f"Successfully created {output_filename}")
