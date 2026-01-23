# AI Portfolio Assistant - Setup & Usage Guide

## 🚀 What's Been Built

A **unified AI Portfolio Assistant** that combines 4 powerful features into one conversational interface:

1. **Smart Q&A** - Answers questions about your work, skills, and experience
2. **Project Recommendations** - Suggests relevant projects based on visitor interests
3. **Resume Generator** - Creates tailored resumes for specific job roles
4. **Contact Assistant** - Helps formulate professional contact messages

## 📦 New Dependencies Installed

- `ai` - Vercel AI SDK for streaming chat responses
- `openai` - OpenAI API client
- `zod` - Schema validation for function calling
- `jspdf` - PDF generation for resumes (future enhancement)
- `lucide-react` - Icon library for chat UI

## 🔧 Setup Instructions

### Step 1: Get Your OpenAI API Key

1. Go to [OpenAI Platform](https://platform.openai.com/api-keys)
2. Sign in or create an account
3. Click "Create new secret key"
4. Copy the key (starts with `sk-proj-...`)

### Step 2: Configure Environment Variables

Open `.env.local` and replace the placeholder:

```bash
OPENAI_API_KEY=sk-proj-your-actual-key-here
```

**Important:** Never commit your `.env.local` file to Git!

### Step 3: Restart Dev Server

```bash
# Stop the current dev server (Ctrl+C)
npm run dev
```

## 🎯 Features & Usage

### 1️⃣ Smart Q&A
**What it does:** Answers questions about your portfolio using AI with context about all your projects and skills.

**Example prompts:**
- "What projects has Julius Ian worked on?"
- "Tell me about his React experience"
- "What's his tech stack?"
- "Does he have Spring Boot experience?"

### 2️⃣ Project Recommendations
**What it does:** Uses AI function calling to search and recommend relevant projects based on visitor interests.

**Example prompts:**
- "Show me React projects"
- "What projects use Spring Boot?"
- "Do you have any e-commerce projects?"
- "Show me projects with MongoDB"

**How it works:**
- AI calls the `recommendProjects` function
- Searches through projects-data.json
- Returns matching projects with links

### 3️⃣ Resume Generator
**What it does:** Generates a tailored resume highlighting relevant skills and projects for specific job roles.

**Example prompts:**
- "Generate a resume for a senior React developer position"
- "Create a CV for a full-stack Java role"
- "Tailor my resume for backend engineer"
- "Resume for Spring Boot developer role"

**How it works:**
- AI calls the `generateResume` function
- Extracts keywords from job description
- Filters relevant skills and projects
- Returns structured resume data

### 4️⃣ Contact Assistant
**What it does:** Helps visitors craft professional contact messages and suggests relevant projects to mention.

**Example prompts:**
- "Help me write a message about freelance work"
- "I want to contact about a React project"
- "How should I reach out for collaboration?"

**How it works:**
- AI calls the `suggestContactMessage` function
- Generates message template
- Suggests relevant projects to reference
- Provides next steps

## 🏗️ Technical Architecture

### API Endpoint: `/api/chat/route.ts`
- Streams responses using Vercel AI SDK
- Uses GPT-4 Turbo Preview model
- Implements 4 AI tools with function calling
- Loads portfolio context from projects-data.json

### Chat Widget: `ChatWidget.tsx`
- Floating chat button in bottom-right corner
- Slide-up chat window (600px height)
- Real-time streaming responses
- Beautiful UI with gradient colors
- Displays tool results (projects, skills, templates)
- Mobile-responsive design

### Portfolio Context
The AI has full access to:
- All projects from `projects-data.json`
- Your skills and technologies
- Project features, descriptions, and technical decisions
- GitHub and live links

## 🎨 UI/UX Features

- **Floating Button:** Bottom-right with pulse animation
- **Chat Window:** 600px height, modern dark mode design
- **Streaming Responses:** Real-time AI responses
- **Tool Results:** Visual display of projects, skills, templates
- **Loading States:** Animated typing indicator
- **Error Handling:** User-friendly error messages
- **Mobile Support:** Responsive design

## 🧪 Testing the AI Assistant

### Test Plan

1. **Test Q&A:**
   ```
   "What projects has Julius Ian worked on?"
   "Tell me about the ExpenseMate project"
   ```

2. **Test Project Recommendations:**
   ```
   "Show me React projects"
   "What Spring Boot projects do you have?"
   ```

3. **Test Resume Generator:**
   ```
   "Generate a resume for senior React developer"
   "Create a CV for full-stack engineer"
   ```

4. **Test Contact Assistant:**
   ```
   "Help me contact Julius Ian about freelance work"
   "I want to hire Julius Ian for a React project"
   ```

## 🚀 Next Steps (Optional Enhancements)

### 1. PDF Resume Download
Add PDF generation to `generateResume` function:

```typescript
import jsPDF from 'jspdf';

// In generateResume tool
const doc = new jsPDF();
doc.text(`Resume for ${jobDescription}`, 10, 10);
// ... add content
return { pdfUrl: doc.output('dataurlstring') };
```

### 2. Chat History Persistence
Store chat history in localStorage:

```typescript
const [messages, setMessages] = useState(() => {
  const saved = localStorage.getItem('chatHistory');
  return saved ? JSON.parse(saved) : [];
});
```

### 3. Advanced Project Search
Implement vector embeddings for semantic search:
- Use OpenAI embeddings API
- Store project embeddings
- Perform similarity search

### 4. Analytics
Track AI interactions:
- Which questions are most common
- Which projects are recommended most
- Popular resume queries

### 5. Voice Input
Add speech-to-text for voice queries:

```typescript
import { useSpeechRecognition } from 'react-speech-recognition';
```

## 💰 Cost Considerations

**OpenAI API Pricing (GPT-4 Turbo):**
- ~$0.01 per 1K input tokens
- ~$0.03 per 1K output tokens
- Average chat: ~$0.02-0.05 per interaction

**Cost Optimization:**
- Use GPT-3.5 Turbo for lower costs (change model in route.ts)
- Set max tokens limit (currently 1000)
- Implement rate limiting if needed

## 🔒 Security Best Practices

✅ **Already Implemented:**
- Environment variables for API key
- Server-side API calls only
- No client-side key exposure

📋 **Recommended Additions:**
- Rate limiting (limit requests per IP)
- User authentication (optional)
- Input sanitization
- Content moderation

## 🐛 Troubleshooting

### "API key not found" error
- Check `.env.local` has correct API key
- Restart dev server after adding key
- Ensure key starts with `sk-proj-`

### Chat button not showing
- Check browser console for errors
- Ensure `ChatWidget` is imported in layout.tsx
- Clear browser cache

### No AI responses
- Verify OpenAI API key is valid
- Check network tab for API errors
- Ensure `/api/chat` endpoint is working

### Tool results not displaying
- Check `toolInvocations` in message object
- Verify tool execution returns correct format
- Check browser console for parsing errors

## 📱 Mobile Optimization

The chat widget is fully responsive:
- **Desktop:** 400px width, bottom-right corner
- **Mobile:** Full-width drawer (coming soon)
- **Tablet:** Adjusted positioning

To improve mobile UX, consider:
- Bottom sheet drawer on mobile
- Swipe to close gesture
- Reduced height on small screens

## 🎓 Learning Resources

- [Vercel AI SDK Docs](https://sdk.vercel.ai/docs)
- [OpenAI Function Calling](https://platform.openai.com/docs/guides/function-calling)
- [OpenAI Best Practices](https://platform.openai.com/docs/guides/prompt-engineering)

## ✅ What's Complete

- ✅ AI chat API with 4 functions (Q&A, recommendations, resume, contact)
- ✅ Beautiful chat widget UI with streaming responses
- ✅ Portfolio context loading from projects-data.json
- ✅ Function calling for smart features
- ✅ Error handling and loading states
- ✅ Mobile-responsive design
- ✅ Integration with layout

## 🎉 Ready to Test!

Your AI Portfolio Assistant is ready to use! Here's how to get started:

1. Add your OpenAI API key to `.env.local`
2. Restart the dev server
3. Look for the floating chat button in bottom-right corner
4. Try all 4 capabilities with the example prompts above

**Have fun showcasing your AI integration skills!** 🚀
