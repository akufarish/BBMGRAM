package com.example.bbmgram.adapters

import android.content.Context
import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import com.example.bbmgram.databinding.StoryItemBinding
import com.example.bbmgram.models.Posts

class StoryAdapter(
    private  val dataStory: ArrayList<Posts>,
    private val context: Context
): RecyclerView.Adapter<StoryAdapter.ViewHolder>() {
    class ViewHolder(val binding: StoryItemBinding): RecyclerView.ViewHolder(binding.root) {

    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        val binding = StoryItemBinding.inflate(LayoutInflater.from(context), parent, false)
        return ViewHolder(binding)
    }

    override fun getItemCount(): Int {
        return dataStory.size
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        val currentItem = dataStory[position]
        holder.binding.profilePict.setImageResource(currentItem.profilePict)
    }
}